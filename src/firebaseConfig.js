// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbmHSpTy9VHav2P0kDM5VamudazVYvTY4",
  authDomain: "resource-awareness.firebaseapp.com",
  projectId: "resource-awareness",
  storageBucket: "resource-awareness.appspot.com",
  messagingSenderId: "112583239453",
  appId: "1:112583239453:web:0ffbf6ad95425617e4a3f4",
  measurementId: "G-0TTG4RQ9JR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
