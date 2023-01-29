// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0OGuqKxTixlSP8mt6Sso6r-YU3n5bONc",
  authDomain: "get-noti-511b6.firebaseapp.com",
  projectId: "get-noti-511b6",
  storageBucket: "get-noti-511b6.appspot.com",
  messagingSenderId: "516642912106",
  appId: "1:516642912106:web:ef4c0b9543c459ab725713",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
