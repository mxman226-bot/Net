import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFKPM_uQU3-98O-012694rOHz4f7OI1Ho",
  authDomain: "mido-b6ceb.firebaseapp.com",
  projectId: "mido-b6ceb",
  storageBucket: "mido-b6ceb.appspot.com",
  messagingSenderId: "257367052154",
  appId: "1:257367052154:web:095ff8760d8ea2996a10c3",
  measurementId: "G-3SPPYNMYZ9"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
