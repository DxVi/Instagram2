// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNyX_Z_ZOAng0LRIbULzl9tS-3Om6yil4",
  authDomain: "instagram2-8fe42.firebaseapp.com",
  projectId: "instagram2-8fe42",
  storageBucket: "instagram2-8fe42.appspot.com",
  messagingSenderId: "515149178668",
  appId: "1:515149178668:web:0515edd67fa476b72aae89",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
