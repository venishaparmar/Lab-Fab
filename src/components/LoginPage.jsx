import { useState } from "react";
import "../styles/login.css";
import toast from "react-hot-toast";
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

  const handleLoginSuccess = (credentialResponse) => {
    let myUser = jwtDecode(credentialResponse.credential);
    if (myUser.email.endsWith("@marwadiuniversity.ac.in")) {
      //localStorage.setItem("jwt-token", credentialResponse.credential);
      // localStorage.setItem("username", myUser.name);
      const numbersInEmail = myUser.email.match(/\d+/g);
      const grNumber = numbersInEmail.join("");
      console.log(grNumber);
      localStorage.setItem("currentUser", grNumber);
      localStorage.setItem("isLoggedIn", true);
      toast.success(" LoggedIn Successfully ", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });

      navigate("/home");
    } else {
      alert("Only users with @marwadiuniversity.ac.in can login.");
    }
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const handleLogin =()=>{
    navigate("/faculty-login");
  }

  return (
    <>
      <form>
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
            </div>
          </div>
          {role === "student" && (
            <button>
              <Link to="/qr-reader">Scan QR from ID</Link>
            </button>
          )}
          {role === "faculty" && (
            <button onClick={handleLogin}>
              Login
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
