;

import { sendPasswordResetEmail } from "firebase/auth";

import { toast } from "react-hot-toast";
import { auth } from "../../firebase/firebase.config";
import { useState } from "react";
import { useLocation } from "react-router";

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || ""); 

    const handleReset = async (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent!");
                
                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to send reset email.");
            });
    };

    return (
        <div className="max-w-sm mx-auto mt-16 bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#2C1B0E]">Reset Your Password</h2>
            <p className="text-gray-600 mb-6">
                Enter your email address below, and we’ll send you instructions to reset your password.
            </p>

            <form onSubmit={handleReset}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border rounded-lg p-2 mb-4"
                    required
                />
                <button
                    type="submit"
                    className="w-full  bg-[#c78947] text-white py-2 rounded-lg hover:bg-primary/80 transition"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgetPassword;
