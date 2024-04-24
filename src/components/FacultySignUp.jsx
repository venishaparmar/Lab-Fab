import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/faculty-signup.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const FacultySignUp = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === "password") {
            setShowPassword(!showPassword);
        } else if (field === "confirmPassword") {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const response = await fetch("http://localhost:3000/api/faculty", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
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
            <form onSubmit={handleSubmit} className="faculty-signup-form">
                <h5>Create Here Your Faculty Account</h5>
                <div>
                    <label htmlFor="email">Enter your email</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Create password</label>
                    <div className="mb-2 flex">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                        />
                        <span
                            className="flex justify-around items-center"
                            onClick={() => togglePasswordVisibility("password")}
                        >
                            <Icon class="absolute mr-10" icon={showPassword ? eyeOff : eye} size={20} />
                        </span>
                    </div>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <div className="mb-2 flex">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete="new-password"
                        />
                        <span
                            className="flex justify-around items-center"
                            onClick={() => togglePasswordVisibility("confirmPassword")}
                        >
                            <Icon class="absolute mr-10" icon={showConfirmPassword ? eyeOff : eye} size={20} />
                        </span>
                    </div>
                    <div className="login">
                        Already have an account? <strong><Link to="/faculty-login">Login</Link></strong>
                    </div>
                    <button>Create Account</button>
                </div>
            </form>
        </>
    );
};

export default FacultySignUp;
