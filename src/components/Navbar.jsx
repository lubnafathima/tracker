"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

export default function Navbar({ activeComponent, setActiveComponent }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/sign-in");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav aria-label="Global" className="flex gap-6 lg:gap-8 p-4 lg:px-8">
      <button
        onClick={() => setActiveComponent("inbox")}
        className={`text-sm font-semibold leading-6 hover:text-indigo-600 cursor-pointer
            ${
              activeComponent === "inbox" ? "text-indigo-600" : "text-gray-900"
            }`}
      >
        Inbox
      </button>
      <button
        onClick={() => setActiveComponent("compose")}
        className={`text-sm font-semibold leading-6 hover:text-indigo-600 cursor-pointer
            ${
              activeComponent === "compose"
                ? "text-indigo-600"
                : "text-gray-900"
            }`}
      >
        Compose
      </button>
      <button
        onClick={() => setActiveComponent("sent")}
        className={`text-sm font-semibold leading-6 hover:text-indigo-600 cursor-pointer
            ${
              activeComponent === "sent" ? "text-indigo-600" : "text-gray-900"
            }`}
      >
        Sent
      </button>
      <button
        onClick={handleLogout}
        className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Logout
      </button>
    </nav>
  );
}
