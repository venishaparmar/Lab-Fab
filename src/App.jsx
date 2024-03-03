import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Labs from "./pages/Labs";
import NavBar from "./components/NavBar";
import HomeMain from "./components/HomeMain";



function App() {
  return (
      <BrowserRouter>
      <>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomeMain />}/>
          <Route path="/labs" element={<Labs />}/>
            {/* <Route path="project" element={<Project />} /> */}
          
        </Routes>
        </>
        {/* <Labs/> */}
      {/* <Labcard/> */}
      {/* <NavBar />*/}
      {/* <LabEntry /> */}
      {/* <HomeMain /> */}
      {/* <LoginPage /> */}

      </BrowserRouter>
      
  );
}

export default App;
