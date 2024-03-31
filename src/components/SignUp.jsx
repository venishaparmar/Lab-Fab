import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const SignUp = () => {
    const [role, setRole] = useState("student");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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

        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <>
            <div className="background">
                <div>
                    <div className="shape" />
                    <div className="shape" />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Welcome to MU ICT Labs</h1>
                <h5>Create Your User Account</h5>
                <div>
                <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Institute Email Id"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="username">Enter your email</label>
                    <input
                        type="text"
                        placeholder="Institute Email Id"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                            <Icon class="absolute mr-10" icon={passwordVisible ? eyeOff : eye} size={20} />
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
                            <Icon class="absolute mr-10" icon={confirmPasswordVisible ? eyeOff : eye} size={20} />
                        </span>
                    </div>
                    <label htmlFor="Role">Select Role</label>
                    <div className="role-radio">
                        <label>
                            <input
                                type="radio"
                                value="student"
                                checked={role === "student"}
                                onChange={() => setRole("student")}
                            />
                            Student
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="faculty"
                                checked={role === "faculty"}
                                onChange={() => setRole("faculty")}
                            />
                            Faculty
                        </label>
                    </div>
                    <button>Create Account</button>
                    <div className="login">
                        Already have account ? <strong><Link to="/login">Login</Link></strong>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUp;
