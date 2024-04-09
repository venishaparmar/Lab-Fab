import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import LabEntry from "./components/LabEntry";
import SignUp from "./components/SignUp";
import ComponentPage from "./components/ComponentPage";
import RequestShow from "./components/RequestShow";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<HomeMain />} />
          <Route path="/component-issue" element={<ComponentIssue />} />
          <Route path="/lab-entry" element={<LabEntry />} />
          <Route path="/request-show" element={<RequestShow />} />
          <Route exact path="/component-page/:id" element={<ComponentPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
