// =====================================================
// firebase.js  —  Firebase initialization (auth + db + storage)
// =====================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFKPM_uQU3-98O-012694rOHz4f7OI1Ho",
  authDomain: "mido-b6ceb.firebaseapp.com",
  projectId: "mido-b6ceb",
  storageBucket: "mido-b6ceb.firebasestorage.app",
  messagingSenderId: "257367052154",
  appId: "1:257367052154:web:095ff8760d8ea2996a10c3",
  measurementId: "G-3SPPYNMYZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Avoid duplicate initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);

// Persist auth across reloads/sessions (IndexedDB → localStorage fallback)
setPersistence(auth, indexedDBLocalPersistence)
  .catch(() => setPersistence(auth, browserLocalPersistence))
  .catch((e) => console.log("[v0] persistence error", e));

export default app;
