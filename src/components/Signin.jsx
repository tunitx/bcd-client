import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const Signin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            console.log("hi");

            if (response.status === 201) {
                const { SessionToken } = response.data;
                localStorage.setItem("sessionToken", SessionToken);
                navigate("/");
            }
        } catch (error) {
            console.error("Login failed:", error.response?.data?.message || error.message);
            alert("Invalid credentials, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-blue-950 font-sans">
            <div className="text-blue-100 p-8 relative bottom-6">
                <h1>Breast Cancer Detection</h1>
            </div>
            <div className="flex flex-col items-center w-3/8 space-y-6 rounded-md p-8 bg-blue-100 text-blue-950">
                <div className="flex flex-col text-sm">
                    <h1>Sign in</h1>
                </div>

                <div className="flex flex-col w-full space-y-2 text-lg">
                    <h2>Enter the Email</h2>
                    <input
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        name="email"
                        className="border rounded-md outline-1 p-2"
                    />
                </div>

                <div className="flex flex-col w-full space-y-2 text-lg">
                    <h2>Enter the password</h2>
                    <input
                        type="text"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                        className="border rounded-md outline-1 p-2"
                    />
                </div>

                <div className="flex flex-col justify-center items-center space-y-2">
                    <button
                        className="bg-blue-500 text-blue font-semibold px-6 py-2 rounded-lg shadow-md 
                        hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 
                        focus:ring-blue-300 transition-all duration-200"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? <LoadingOutlined /> : "Submit"}
                    </button>

                    <p>
                        Don't have an account? Sign up
                        <Link to="/signup" className="text-blue-500 hover:underline"> here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;