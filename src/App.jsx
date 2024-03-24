<<<<<<< HEAD

import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter, Routes } from "react-router-dom";
>>>>>>> 442723ffe7ec56c07ab5b029b752173339e2cb28
import "../src/styles/App.css";
import Labs from "./pages/Labs";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";

<<<<<<< HEAD

import LoginPage from "./components/LoginPage";
=======
// import LoginPage from "./components/LoginPage";
>>>>>>> 442723ffe7ec56c07ab5b029b752173339e2cb28
import ComponentIssue from "./components/ComponentIssue";

function App() {
  return (
    <BrowserRouter>
      <>
        {/* <NavBar /> */}
        {/* <HomeMain /> */}
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<HomeMain />}/>
          {/* <Route path="/labs" element={<Labs />}/> 
          <Route path="project" element={<Project />} /> */}
=======
          <Route path="/" element={<HomeMain />} />
          {/* <Route path="/labs" element={<Labs />} /> */}

          {/* <Route path="/" element={<HomeMain />}/>
          <Route path="/labs" element={<Labs />}/> */}

          {/* <Route path="project" element={<Project />} /> */}
>>>>>>> 442723ffe7ec56c07ab5b029b752173339e2cb28
        </Routes>
      </>
      {/* <ComponentIssue /> */}
      {/* <LoginPage /> */}
    </BrowserRouter>
  );
}

export default App;
