import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../styles/login.css";  

const LoginPage = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    let myUser = jwtDecode(credentialResponse.credential);
    if (myUser.email.endsWith("@marwadiuniversity.ac.in")) {
      const numbersInEmail = myUser.email.match(/\d+/g);
      const grNumber = numbersInEmail.join("");
      console.log(grNumber);
      localStorage.setItem("currentUser", grNumber);
      localStorage.setItem("isLoggedIn", true);

      navigate("/home");
    } else {
      alert("Only users with @marwadiuniversity.ac.in can login.");
    }
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const handleLogin = () => {
    navigate("/faculty-login");
  };

  return (
    <>
      <form className="login-form">
        <h1>Welcome to MU ICT Labs</h1>
        <h5>Login to access your account</h5>
        <div>
          <div className="select-role">
            <label htmlFor="Role" className="role-radio">
              Select Role :
            </label>
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
              <input
                type="radio"
                value="lablogin"
                checked={role === "lablogin"}
                onChange={() => setRole("lablogin")}
              />
              <label className="role-radio">Lab Login</label>
            </div>
          </div>
          {role === "student" && (
            <button style={{ color: "white" }}>
              <Link to="/qr-reader">Scan QR from ID</Link>
            </button>
          )}
          {role === "faculty" && (
            <button onClick={handleLogin}>Login</button>
          )}
          {role === "lablogin" && (
            <button>
              <Link to="/lab-login">Go to Lab Login</Link>
            </button>
          )}
          {(role === "student" || role === "faculty") && (
            <div className="login-google">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginPage;
