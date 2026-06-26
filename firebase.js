// =====================================================
// firebase.js  —  Firebase initialization (auth + db + storage)
// =====================================================

import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence, indexedDBLocalPersistence } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFKPM_uQU3-98O-012694rOHz4f7OI1Ho",
  authDomain: "mido-b6ceb.firebaseapp.com",
  projectId: "mido-b6ceb",
  storageBucket: "mido-b6ceb.firebasestorage.app",
  messagingSenderId: "257367052154",
  appId: "1:257367052154:web:095ff8760d8ea2996a10c3",
  measurementId: "G-3SPPYNMYZ9"
};

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
