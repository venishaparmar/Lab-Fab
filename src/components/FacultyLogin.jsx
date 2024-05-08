import "../styles/faculty-signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
import toast from "react-hot-toast";

const FacultyLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.endsWith("@marwadieducation.edu.in")) {
            toast.error(" Email should end with @marwadieducation.edu.in ", {
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
            // alert("Email should end with @marwadieducation.edu.in");
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:3000/api/faculty/login", {
                email: email,
                password: password,
            });
            console.log(response.data.faculty);
    
            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                navigate("/home");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="faculty-login-form">
            <h5>Login to Your Account</h5>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <div className="mb-4 flex">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <span
                        className="flex justify-around items-center"
                        onClick={togglePasswordVisibility}
                    >
                        <Icon class="absolute mr-10" icon={showPassword ? eyeOff : eye} size={20} />
                    </span>
                </div>
                <div className="login">
                    <p>If you do not have an account, <strong><Link to="/faculty-signup">Signup</Link></strong>.</p>
                </div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default FacultyLogin
