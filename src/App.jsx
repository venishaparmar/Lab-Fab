
import { BrowserRouter, Routes } from "react-router-dom";
import "../src/styles/App.css";
// import Labs from "./pages/Labs";
import NavBar from "./components/NavBar";
// import HomeMain from "./components/HomeMain";

// import HomeMain from "./components/HomeMain";

// import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<HomeMain />} />
          {/* <Route path="/labs" element={<Labs />} /> */}
=======
          {/* <Route path="/" element={<HomeMain />}/>
          <Route path="/labs" element={<Labs />}/> */}
>>>>>>> 69c92c81c8bb74c226d4d2bfe834127f09b31ed5
          {/* <Route path="project" element={<Project />} /> */}
        </Routes>
      </>
      <ComponentIssue />
      {/* <LoginPage /> */}
    </BrowserRouter>
  );
}

export default App;
