import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const sessionKey = localStorage.getItem("sessionToken");
        if (!sessionKey) {
            navigate("/signup");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("sessionToken"); 
        navigate("/signin"); 
    };

    return (
        <div className="flex flex-col justify-center items-center min-w-screen min-h-screen bg-blue-950 font-sans space-y-10">
            <div className="flex flex-col rounded-2xl bg-blue-300 p-8 justify-center items-center space-y-4">
                <h1>Welcome to Breast Cancer Detection Application</h1>
                <h2 className="font-mono">A small step towards a greater future 🚀</h2>
            </div>

            <div className="flex flex-col items-center bg-blue-300 p-8 rounded-2xl space-y-5">
                <h1>Activities to do while you're here</h1>
                <div className="flex flex-row w-full justify-around items-center p-5">
                    <div className="font-mono flex flex-col justify-center items-center space-y-2">
                        <p>Checkout your past results</p>
                        <button className="bg-blue-500  px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">History</button>
                    </div>

                    <div className="font-mono flex flex-col justify-center items-center space-y-2">
                        <p>Upload a new X-Ray</p>
                        <button className="bg-blue-500  px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">Upload</button>
                    </div>
                </div>

                <button 
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;
