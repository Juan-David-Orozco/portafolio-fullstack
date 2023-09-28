// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6fVkcO2cGniU8xKMxco7GXCvaNge2SvM",
  authDomain: "portafolio-fullstack.firebaseapp.com",
  projectId: "portafolio-fullstack",
  storageBucket: "portafolio-fullstack.appspot.com",
  messagingSenderId: "507342387608",
  appId: "1:507342387608:web:51a018bca373f3291453ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);