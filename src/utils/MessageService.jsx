import { db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

export const sendMessage = async (from, to, messageContent) => {
  try {
    await addDoc(collection(db, "Messages"), {
      from,
      to,
      message: messageContent,
      status: "unopened",
      timestamp: serverTimestamp(),
    });
    alert("Message sent!");
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const fetchMessages = async (userId) => {
  const messagesRef = collection(db, "Messages");
  const q = query(messagesRef, where("to", "==", userId));
  const querySnapshot = await getDocs(q);

  const messages = [];
  querySnapshot.forEach((doc) => {
    messages.push({ id: doc.id, ...doc.data() });
  });

  return messages;
};

export const fetchSentMessages = async (userId) => {
  const messagesRef = collection(db, "Messages");
  const q = query(messagesRef, where("from", "==", userId));
  const querySnapshot = await getDocs(q);

  const sentMessages = [];
  querySnapshot.forEach((doc) => {
    sentMessages.push({ id: doc.id, ...doc.data() });
  });

  return sentMessages;
};

export const markMessageAsRead = async (messageId) => {
  try {
    const messageRef = doc(db, "Messages", messageId);
    await updateDoc(messageRef, {
      status: "opened",
    });
  } catch (error) {
    console.error("Error updating message status:", error);
    throw error;
  }
};
