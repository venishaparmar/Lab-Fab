import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import ComponentIssue from "./components/ComponentIssue";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />

        <Routes>
          {/* <Route path="/" element={<HomeMain />} /> */}
          {/* <Route path="/labs" element={<Labs />} /> */}
          {/* <Route path="project" element={<Project />} /> */}
        </Routes>
      </>
      <ComponentIssue />
      {/* <LoginPage /> */}
    </BrowserRouter>
  );
}

export default App;
