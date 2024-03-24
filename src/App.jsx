import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
<<<<<<< HEAD
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
=======
// import LoginPage from "./components/LoginPage";
//import ComponentIssue from "./components/ComponentIssue";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomeMain />} />
        </Routes>
      </>
      {/* <ComponentIssue /> */}
>>>>>>> 143d57320e460bd951be80569fa8b5d323bb74a0
    </BrowserRouter>
  );
}

export default App;
