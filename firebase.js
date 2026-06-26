// =====================================================
// firebase.js  —  Firebase initialization (auth + db + storage)
// =====================================================

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYoOvMv6h2kBddMYqWQu9CpBamt1SsCQM",
  authDomain: "mido-34f40.firebaseapp.com",
  projectId: "mido-34f40",
  storageBucket: "mido-34f40.firebasestorage.app",
  messagingSenderId: "529723164634",
  appId: "1:529723164634:web:c73c2fac1074bc968d62e3",
  measurementId: "G-SVF2Q7ZKJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
