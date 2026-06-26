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
