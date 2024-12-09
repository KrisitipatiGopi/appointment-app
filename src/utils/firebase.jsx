
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1GUKuS0SnYJ63-t-g23qjwU_VO91OcA8",
  authDomain: "prescripto-6af3c.firebaseapp.com",
  projectId: "prescripto-6af3c",
  storageBucket: "prescripto-6af3c.firebasestorage.app",
  messagingSenderId: "742108147483",
  appId: "1:742108147483:web:77031b3b8bbd2f26116dbe",
  measurementId: "G-9MKQXHPDM8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
