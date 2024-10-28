import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,

  //   apiKey: "AIzaSyB30PX5erAUI8QIalbgF2joZCf5T9mE4v4",
  //   authDomain: "link-tracker-91681.firebaseapp.com",
  //   projectId: "link-tracker-91681",
  //   storageBucket: "link-tracker-91681.appspot.com",
  //   messagingSenderId: "504115556389",
  //   appId: "1:504115556389:web:d91bf0727221566210cfcc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };