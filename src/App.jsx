<<<<<<< HEAD
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======

import { BrowserRouter, Routes } from "react-router-dom";
import "../src/styles/App.css";
// import Labs from "./pages/Labs";
import NavBar from "./components/NavBar";
// import HomeMain from "./components/HomeMain";

// import HomeMain from "./components/HomeMain";

// import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";

>>>>>>> 9676a90838ea9bce28fdc0ff88280f581b8ca230
function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomeMain />} />
          {/* <Route path="/labs" element={<Labs />} /> */}
          {/* <Route path="project" element={<Project />} /> */}
        </Routes>
      </>
      <ComponentIssue/>      
      {/* <LoginPage /> */}
    </BrowserRouter>
  );
}

export default App;
