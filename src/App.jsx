<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
// import LoginPage from "./components/LoginPage";
//import ComponentIssue from "./components/ComponentIssue";
=======
import NavBar from "./components/NavBar";
import "./firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Labs from "./pages/Labs";

import HomeMain from "./components/HomeMain";

>>>>>>> 0b55ad7561d4be149598f39a3331155b1cdc5986

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<HomeMain />} />
        </Routes>
      </>
      {/* <ComponentIssue /> */}
=======
        <Routes>{/* <Route path="/" element={<HomeMain />} /> */}</Routes>
      </>
      <button onClick={fetchDataFromFirestore}> Fetch Data </button>
        <Routes>
          <Route path="/" element={<HomeMain />}/>
          <Route path="/labs" element={<Labs />}/> 
          {/* <Route path="project" element={<Project />} /> */}
        </Routes>
>>>>>>> 0b55ad7561d4be149598f39a3331155b1cdc5986
    </BrowserRouter>
  );
}

export default App;
