import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
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
function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/labs" element={<Labcard />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
