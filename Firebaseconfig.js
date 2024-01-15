// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUY6InZRDwe110ht2AcTCwH6bgV64Krww",
  authDomain: "android-f2fdc.firebaseapp.com",
  projectId: "android-f2fdc",
  storageBucket: "android-f2fdc.appspot.com",
  messagingSenderId: "32840785722",
  appId: "1:32840785722:web:a4313d6fb2d7052fdcfa03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore();

export { authentication, database };
