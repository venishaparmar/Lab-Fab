import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";
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
    </BrowserRouter>
  );
}

export default App;
