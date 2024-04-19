import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import SignUp from "./components/SignUp";
import ComponentPage from "./components/ComponentPage";
import RequestShow from "./components/RequestShow";
import Labcard from "./components/Labcard";
import QrReader from "./components/QrReader";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<HomeMain />} />
          <Route path="/component-issue" element={<ComponentIssue />} />
          <Route path="/lab-entry" element={<Labcard />} />
          <Route path="/request-show" element={<RequestShow />} />
          <Route exact path="/component-page/:id" element={<ComponentPage />} />
          <Route exact path="/qr-reader" element={<QrReader />} />
          <Route exact path="/request" element={<RequestShow />} />

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
