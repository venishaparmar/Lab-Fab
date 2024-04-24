import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import StudentSignUp from "./components/StudentSignUp";
import ComponentPage from "./components/ComponentPage";
import RequestShow from "./components/RequestShow";
import QrReader from "./components/QrReader";
import Labs from "./components/Labs";
import LabEntry from "./components/LabEntry";
import { Toaster } from "react-hot-toast";
import ComponentReview from "./components/ComponentReview";
import FacultySignUp from "./components/FacultySignUp";
import FacultyLogin from "./components/FacultyLogin";
import FacultyHome from "./components/FacultyHome";
import AddComponent from "./components/AddComponent";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student-signup" element={<StudentSignUp />} />
          <Route path="/home" element={<HomeMain />} />
          <Route path="/component-issue" element={<ComponentIssue />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/lab-entry" element={<LabEntry />} />
          <Route path="/request-show" element={<RequestShow />} />
          <Route path="/component-page/:id" element={<ComponentPage />} />
          <Route path="/qr-reader" element={<QrReader />} />
          <Route path="/request" element={<RequestShow />} />
          <Route path="/component-page/:id" element={<ComponentPage />} />
          <Route path="/qr-reader" element={<QrReader />} />
          <Route path="/request" element={<RequestShow />} />
          <Route path="/add-component" element={<AddComponent />} />
          <Route
            path="/component-request-review"
            element={<ComponentReview />}
          />
          <Route
            path="/faculty-signup"
            element={<FacultySignUp />}
          />
          <Route
            path="/faculty-login"
            element={<FacultyLogin />}
          />
          <Route
            path="/faculty-home"
            element={<FacultyHome />}
          />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </>
    </BrowserRouter>
  );
}

export default App;
