import NavBar from "./components/NavBar";
import "./firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Labs from "./pages/Labs";

import HomeMain from "./components/HomeMain";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";


function App() {
  const db = getFirestore();

  // const [storedValues, setStoredValues] = useState([]);
  // const fetchDataFromFirestore = async () => {
  //   const querySnapshot = await getDocs(collection(db, "project-details"));
  //   const tmparray = [];
  //   querySnapshot.forEach((doc) => {
  //     tmparray.push(doc.data());
  //   });
  //   setStoredValues(tmparray);
  //   console.log(tmparray);
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route exact path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
