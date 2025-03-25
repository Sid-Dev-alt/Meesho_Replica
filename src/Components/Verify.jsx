import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Verify = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");
    const sentOtp = queryParams.get("otp");
    const [userOtp, setUserOtp] = useState("");

    const handleVerify = () => {
        if (userOtp === sentOtp) {
            alert("OTP Verified Successfully!");
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Verify OTP</h2>
            <p>Email: {email}</p>
            <input 
                type="text" 
                placeholder="Enter OTP" 
                value={userOtp} 
                onChange={(e) => setUserOtp(e.target.value)} 
            />
            <button onClick={handleVerify} className="btn btn-success" style={{ marginLeft: "10px" }}>
                Verify
            </button>
        </div>
    );
};

export default Verify;
