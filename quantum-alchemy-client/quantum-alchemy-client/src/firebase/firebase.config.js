// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0cNYBfQrUsxGya9XRbgI727h2uTPeHCk",
  authDomain: "quantum-alchemy.firebaseapp.com",
  projectId: "quantum-alchemy",
  storageBucket: "quantum-alchemy.appspot.com",
  messagingSenderId: "595524586272",
  appId: "1:595524586272:web:7eb135705aa91c013e6545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;