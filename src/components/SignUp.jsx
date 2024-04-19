import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [grNumber, setGrNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        grNumber: grNumber,

        password: password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      navigate("/login");
    }
  };

  return (
    <>
      <form className="signup-form">
        <h1>Welcome to MU ICT Labs</h1>
        <div>
          <label htmlFor="name">GR Number</label>
          <input
            type="number"
            placeholder="Enter Your GR Number"
            id="grNumber"

            onChange={(e) => {
              setGrNumber(e.target.value);
            }}

          />
          <label htmlFor="CreatePassword">Create password</label>
          <div className="flex">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              id="CreatePassword"
            />
            <span
              className="flex justify-around items-center"
              onClick={togglePasswordVisibility}
            >
              <Icon
                class="absolute mr-10"
                icon={passwordVisible ? eyeOff : eye}
                size={20}
              />
            </span>
          </div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <div className="flex">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              id="confirmPassword"
            />
            <span
              className="flex justify-around items-center"
              onClick={toggleConfirmPasswordVisibility}
            >
              <Icon
                class="absolute mr-10"
                icon={confirmPasswordVisible ? eyeOff : eye}
                size={20}
              />
            </span>
          </div>
          <button onClick={handleSubmit}>Create Account</button>
          <div className="login">
            Already have account ?{" "}
            <strong>
              <Link to="/login">Login</Link>
            </strong>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
