// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABcKd5PerWPErGSKvwNuXANBsq8y8lUaU",
  authDomain: "ema-john-simple-c6157.firebaseapp.com",
  projectId: "ema-john-simple-c6157",
  storageBucket: "ema-john-simple-c6157.appspot.com",
  messagingSenderId: "862865079882",
  appId: "1:862865079882:web:0d7c7133005b81341030b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(auth);

export default auth;