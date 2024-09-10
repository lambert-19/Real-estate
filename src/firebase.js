// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-89a88.firebaseapp.com",
  projectId: "real-estate-89a88",
  storageBucket: "real-estate-89a88.appspot.com",
  messagingSenderId: "417620934359",
  appId: "1:417620934359:web:443a3ee06a3f606d60ba92",
  measurementId: "G-RXFTXV6Q4R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);