import { useState } from "react";
import "../styles/login.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    let myUser = jwtDecode(credentialResponse.credential);
    if (myUser.email.endsWith("@marwadiuniversity.ac.in")) {
      localStorage.setItem("jwt-token", credentialResponse.credential);
      localStorage.setItem("username", myUser.name);
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Only users with @marwadiuniversity.ac.in can login.");
    }
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const handleLogout = () => {
    // Perform any additional logout tasks here
    setIsLoggedIn(false);
  };

  return (
    <>
      <form>
        <h1>Welcome to MU ICT Labs</h1>
        <h5>Login to access your account</h5>
        <div>
          <div className="select-role">
            <label htmlFor="Role" className="role-radio">Select Role :</label>
            <div className="role-options">
              <input
                type="radio"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
              />
              <label className="role-radio">Student</label>
              <input
                type="radio"
                value="faculty"
                checked={role === "faculty"}
                onChange={() => setRole("faculty")}
              />
              <label className="role-radio">Faculty</label>
            </div>
          </div>
          {role === "student" && (
            <button>
              <Link to="/qr-reader">Scan QR from ID</Link>
            </button>
          )}
          {role === "faculty" && (
              <button>
                <Link to="/signup">SignUp</Link>
              </button>
          )}
          {(role === "student" || role === "faculty") && (
            <div className="login-google">
              <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
            </div>

          )}
          {isLoggedIn && (
            <button onClick={handleLogout} type="button" className="btn btn-info">
              Logout
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginPage;
