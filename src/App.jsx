<<<<<<< HEAD
=======
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
// import Labs from "./pages/Labs";
import NavBar from "./components/NavBar";
//import HomeMain from "./components/HomeMain";
import "./firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// import LoginPage from "./components/LoginPage";
//import ComponentIssue from "./components/ComponentIssue";
import { useState } from "react";
=======
<<<<<<< HEAD
>>>>>>> c1ae2bd1b7643fb19a26465d81d457047593b77f

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Labs from "./pages/Labs";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";


import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
>>>>>>> 88524739afd00b8ff0940a36332253f1aada23d7

function App() {
  const db = getFirestore();

  const [storedValues, setStoredValues] = useState([]);
  const fetchDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "project-details"));
    const tmparray = [];
    querySnapshot.forEach((doc) => {
      tmparray.push(doc.data());
    });
    setStoredValues(tmparray);
    console.log(tmparray);
  };
  return (
    <BrowserRouter>
      <>
<<<<<<< HEAD
        <NavBar />
        <Routes>{/* <Route path="/" element={<HomeMain />} /> */}</Routes>
      </>
      {/* <ComponentIssue /> */}
      <button onClick={fetchDataFromFirestore}> Fetch Data </button>
=======
        {/* <NavBar /> */}
        {/* <HomeMain /> */}
        <Routes>
          {/* <Route path="/" element={<HomeMain />}/> */}
          {/* <Route path="/labs" element={<Labs />}/> 
          <Route path="project" element={<Project />} /> */}
        </Routes>
      </>
      {/* <ComponentIssue /> */}
<<<<<<< HEAD
      <LoginPage />
=======
>>>>>>> 88524739afd00b8ff0940a36332253f1aada23d7
      {/* <LoginPage /> */}
>>>>>>> c1ae2bd1b7643fb19a26465d81d457047593b77f
    </BrowserRouter>
  );
}

export default App;
