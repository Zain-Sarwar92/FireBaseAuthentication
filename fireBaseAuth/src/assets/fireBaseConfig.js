import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-lhDVdDra4lsflLsgOpv92jl-69XDD_Y",
  authDomain: "react-firebase-auth-bf636.firebaseapp.com",
  projectId: "react-firebase-auth-bf636",
  storageBucket: "react-firebase-auth-bf636.firebasestorage.app",
  messagingSenderId: "1093623449579",
  appId: "1:1093623449579:web:abba54326e6cc60dc2fbae",
  measurementId: "G-YM8NVRGN1N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
