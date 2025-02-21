import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQCxvnCtZKAADZDEJ4fMoZh1fxPCGQpI0",
  authDomain: "lambo-28512.firebaseapp.com",
  projectId: "lambo-28512",
  storageBucket: "lambo-28512.firebasestorage.app",
  messagingSenderId: "350609528652",
  appId: "1:350609528652:web:fbe40b85f6aaca86b8a1e9",
  measurementId: "G-ZMSKCBYM1N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
