import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import LabEntry from "./components/LabEntry";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

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
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
