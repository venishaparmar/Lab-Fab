import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const SignUp = () => {
    const [password, setPassword] = useState("");
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // eslint-disable-next-line no-undef
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
                    <label htmlFor="username">Enter your email</label>
                    <input type="text" placeholder="Institute Email Id" id="username" />
                    <label htmlFor="username">Create password</label>
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
                            <Icon class="absolute mr-10" icon={icon} size={20} />
                        </span>
                    </div>
                    <div className="login">Already have account ? <strong><Link to="/login">Login</Link></strong> </div>
                    <button>Create Account</button>
                </div>
            </form>
        </>
    );
};

export default SignUp;
