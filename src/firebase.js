// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKiCIpm_JpaMnRC4jo1pdZK5sXME6MGk",
  authDomain: "shreeramjewellery-server.firebaseapp.com",
  projectId: "shreeramjewellery-server",
  storageBucket: "shreeramjewellery-server.firebasestorage.app",
  messagingSenderId: "1070974392514",
  appId: "1:1070974392514:web:34428f64ac69301c8f435b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()