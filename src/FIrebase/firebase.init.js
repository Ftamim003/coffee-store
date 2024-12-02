// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbCgefIMgF--1dVP-FaDH8s9vO5Ju6g28",
  authDomain: "email-password-17494.firebaseapp.com",
  projectId: "email-password-17494",
  storageBucket: "email-password-17494.firebasestorage.app",
  messagingSenderId: "117105419164",
  appId: "1:117105419164:web:9224b4215588b130e81e59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);