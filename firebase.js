// firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  setPersistence,
  indexedDBLocalPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYoOvMv6h2kBddMYqWQu9CpBamt1SsCQM",
  authDomain: "mido-34f40.firebaseapp.com",
  projectId: "mido-34f40",
  storageBucket: "mido-34f40.firebasestorage.app",
  messagingSenderId: "529723164634",
  appId: "1:529723164634:web:c73c2fac1074bc968d62e3",
  measurementId: "G-SVF2Q7ZKJ6"
};

// تجنب التهيئة المكررة
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Analytics
const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// حفظ تسجيل الدخول
setPersistence(auth, indexedDBLocalPersistence)
  .catch(() => setPersistence(auth, browserLocalPersistence))
  .catch((e) => console.log("Persistence error:", e));

export { analytics };
export default app;
