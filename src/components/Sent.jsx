import React, { useEffect, useState } from "react";
import { fetchSentMessages } from "../utils/MessageService";
import { auth } from "../firebase/firebaseConfig";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Sent = () => {
  const [sentMessages, setSentMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const getSentMessages = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.email;
        const messages = await fetchSentMessages(userId);
        setSentMessages(messages);
      }
    };
    getSentMessages();
  }, []);

  const handleViewMessage = async (message) => {
    setSelectedMessage(message);
    setOpen(true);
  };

  return (
    <>
      <div className="px-4 py-6 lg:flex lg:justify-center lg:gap-4 w-full sm:px-0">
        <dd className="mt-2 text-sm text-gray-900 lg:mt-0 lg:w-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 rounded-md border border-gray-200"
          >
            {sentMessages.map((msg) => (
              <li
                key={msg.id}
                className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
              >
                <div className="flex w-0 flex-1 items-center">
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">{msg.to}</span>
                  </div>
                </div>
                <div className="flex w-0 flex-1 items-center">
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">{msg.status}</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => handleViewMessage(msg)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </dd>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:justify-between sm:items-center sm:px-6">
                <DialogTitle className="text-base font-semibold leading-6 text-gray-900 flex gap-4">
                  {selectedMessage?.from}{" "}
                  <span className="text-gray-500 text-sm font-normal flex items-center">
                    {selectedMessage?.status}
                  </span>
                </DialogTitle>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-auto text-lg font-bold text-red-500"
                >
                  x
                </button>
              </div>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <p className="text-sm text-gray-700">
                      {selectedMessage?.message}
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Sent;
