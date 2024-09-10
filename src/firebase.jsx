// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhXDSFASMK6D0aMscjcXZn94YNuJTRRKs",
    authDomain: "todolist-4fe5f.firebaseapp.com",
    projectId: "todolist-4fe5f",
    storageBucket: "todolist-4fe5f.appspot.com",
    messagingSenderId: "786666791638",
    appId: "1:786666791638:web:055b6fe73f2fce27201f77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
