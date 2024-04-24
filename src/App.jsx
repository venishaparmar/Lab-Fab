import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import SignUp from "./components/SignUp";
import ComponentPage from "./components/ComponentPage";
import RequestShow from "./components/RequestShow";
import QrReader from "./components/QrReader";
import Labs from "./components/Labs";
import LabEntry from "./components/LabEntry";
import { Toaster } from "react-hot-toast";
import ComponentReview from "./components/ComponentReview";
import AddComponent from "./components/AddComponent";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<HomeMain />} />
          <Route path="/component-issue" element={<ComponentIssue />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/lab-entry" element={<LabEntry />} />
          <Route path="/request-show" element={<RequestShow />} />
          <Route exact path="/component-page/:id" element={<ComponentPage />} />
          <Route exact path="/qr-reader" element={<QrReader />} />
          <Route exact path="/request" element={<RequestShow />} />
          <Route exact path="/add-component" element={<AddComponent />} />
          <Route
            exact
            path="component-request-review"
            element={<ComponentReview />}
          />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </>
    </BrowserRouter>
  );
}

export default App;
