import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
// import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import LabEntry from "./components/LabEntry";
// import Labcard from "./components/Labcard";

function App() {
  return (
    <BrowserRouter>
      <>
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
