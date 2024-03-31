import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
// import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import LabEntry from "./components/LabEntry";
import SignUp from "./components/SignUp";
import ComponentPage from "./components/ComponentPage";
// import Labcard from "./components/Labcard";

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUp />} />
          {/* <Route path="/home" element={<HomeMain />} />
          <Route path="/component-issue" element={<ComponentIssue />} />
          <Route path="/lab-entry" element={<LabEntry />} /> */}
        </Routes>
      </>
    </BrowserRouter>
=======
    <>
    <ComponentPage/>
    </>
    // <BrowserRouter>
    //   <>
    //     <Routes>
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="/home" element={<HomeMain />} />
    //       <Route path="/component-issue" element={<ComponentIssue />} />
    //       <Route path="/lab-entry" element={<LabEntry />} />
    //     </Routes>
    //   </>
    // </BrowserRouter>
>>>>>>> eeea9d6ced96aecec640f6d4c97c5c7c80832189
  );
}

export default App;
