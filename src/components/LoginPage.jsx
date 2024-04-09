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

  // const handleButtonLogin = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch("http://localhost:3000/api/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: username,
  //       password: password,
  //     }),
  //   });

  //   const json = await response.json();
  //   if (json.success) {
  //     localStorage.setItem("token", json.token);
  //     navigate("/login");
  //   }
  // };

  return (
    <>
      <form>
        <h1>Welcome to MU ICT Labs</h1>
        <h5>Login to access your account</h5>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="username">Password</label>
          <div className="mb-4 flex">
            <input
              type={type}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <span
              className="flex justify-around items-center"
              onClick={handleToggle}
            >
              <Icon className="absolute mr-10" icon={icon} size={20} />
            </span>
          </div>
          <div className="role-radio">
            <label htmlFor="Role">Select Role :</label>

            <input
              type="radio"
              value="student"
              checked={role === "student"}
              onChange={() => setRole("student")}
            />
            <label>Student</label>
            <input
              type="radio"
              value="faculty"
              checked={role === "faculty"}
              onChange={() => setRole("faculty")}
            />
            <label>Faculty</label>
          </div>
          <button>
            <Link to="/home">Login</Link>
          </button>
          <p className="orsection"> OR </p>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              type="button"
              className="btn btn-info"
            >
              Logout
            </button>
          ) : (
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
            />
          )}
        </div>
        <div className="login">
          Dont have account ?{" "}
          <strong>
            <Link to="/signup">SignUp</Link>
          </strong>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
