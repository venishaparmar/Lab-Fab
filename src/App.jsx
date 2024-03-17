<<<<<<< HEAD
import { BrowserRouter, Routes } from "react-router-dom";
import "../src/styles/App.css";
// import Labs from "./pages/Labs";
import NavBar from "./components/NavBar";
// import HomeMain from "./components/HomeMain";
=======
import HomeMain from "./components/HomeMain";
>>>>>>> b304e7cafd02be080a30d67123fa9636893fcc10
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />

        <Routes>
          {/* <Route path="/" element={<HomeMain />}/>
          <Route path="/labs" element={<Labs />}/> */}
          {/* <Route path="project" element={<Project />} /> */}
        </Routes>
      </>
      <ComponentIssue/>      
      {/* <LoginPage /> */}
    </BrowserRouter>
  );
}

export default App;
