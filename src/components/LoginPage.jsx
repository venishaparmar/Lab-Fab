import React from "react";
import "../styles/login.css";

const LoginPage = () => {
  return (
    <>
      <div className="background">
        <div>
          <div className="shape" />
          <div className="shape" />
        </div>
      </div>
      <form>
        <h3>Login Here</h3>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button>Log In</button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
