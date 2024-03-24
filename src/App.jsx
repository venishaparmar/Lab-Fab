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
        <NavBar />
        <Routes>{/* <Route path="/" element={<HomeMain />} /> */}</Routes>
      </>
      {/* <ComponentIssue /> */}
      <button onClick={fetchDataFromFirestore}> Fetch Data </button>
      {/* <LoginPage /> */}
    </BrowserRouter>
  );
}

export default App;
