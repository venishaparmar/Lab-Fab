import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
<<<<<<< HEAD
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import LabEntry from "./components/LabEntry";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

=======
import Labcard from "./components/Labcard";
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
>>>>>>> bf2a8b56158cce29d992ad99cb5da5ddadcc7dd7
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    let myUser = jwtDecode(credentialResponse.credential);
    if (myUser.email.endsWith("@marwadiuniversity.ac.in")) {
      console.log(myUser.name);
      setIsLoggedIn(true);
    } else {
      console.log("Only users with @marwadiuniversity.ac.in can login.");
    }
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const handleLogout = () => {
    // Perform any additional logout tasks here
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <>
        <NavBar />
<<<<<<< HEAD
        {/* {isLoggedIn ? (
          <button onClick={handleLogout} type="button" class="btn btn-info">
            Logout
          </button>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        )} */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomeMain />} />
          <Route path="/component-issue" element={<ComponentIssue />} />
          <Route path="/lab-entry" element={<LabEntry />} />
=======
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/labs" element={<Labcard />} />
>>>>>>> bf2a8b56158cce29d992ad99cb5da5ddadcc7dd7
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
