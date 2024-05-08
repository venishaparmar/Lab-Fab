import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LabLogin = () => {
    const [adminId, setAdminId] = useState("");
    const [labNumber, setLabNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/lablogin", {
                adminId: adminId,
                labNumber: labNumber,
                password: password,
            });
            console.log(response.data);

            if (response.data.success) {
                // Handle successful login
                toast.success("Login successful", {
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
                // Redirect to the home page or dashboard
            } else {
                // Handle unsuccessful login
                toast.error("Login failed", {
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
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred", {
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
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="lablogin-form">
                <h1>MU ICT Labs Login</h1>
                <div>
                    <label htmlFor="adminId">Admin ID</label>
                    <input
                        type="text"
                        placeholder="Enter Admin ID"
                        id="adminId"
                        value={adminId}
                        onChange={(e) => setAdminId(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="labNumber">Lab Number</label>
                    <input
                        type="text"
                        placeholder="Enter Lab Number"
                        id="labNumber"
                        value={labNumber}
                        onChange={(e) => setLabNumber(e.target.value)}
                    />
                </div>
                <label htmlFor="EnterPassword">Enter password</label>
                <div className="flex">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        id="EnterPassword"
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
                <button><Link to="/home">Enter</Link></button>
            </form>
        </>
    );
};

export default LabLogin;
