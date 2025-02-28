import React, { useState } from "react";
import signup from "../assets/login/signup.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async () => {
    if (!isChecked) {
      toast.error("Please agree to the Terms and Conditions!");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Signup successful!");
        setTimeout(() => navigate("/login"), 2000); // Navigate after 2 seconds
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-black min-h-screen flex pl-20">
      {/* Image Section */}
      <div className="w-1/2 hidden md:flex items-center justify-center">
        <img src={signup} alt="Login Illustration" className="max-w-full" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-20">
        <img src="/logo.png" alt="Logo" className="w-32 mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">
          Let's Create Your Account
        </h1>
        <p className="text-gray-400 text-lg mb-2">
          Let’s get into the world of exclusive features and benefits.
        </p>

        <p className="text-lg text-white mb-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-lime-400 cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>

        {/* Username Input */}
        <div className="w-full mb-4">
          <label htmlFor="name" className="text-white block text-left mb-1">
            Username
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#2a2a2a] p-3 rounded-lg text-white outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Enter your Username"
          />
        </div>

        {/* Email Input */}
        <div className="w-full mb-4">
          <label htmlFor="email" className="text-white block text-left mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#2a2a2a] p-3 rounded-lg text-white outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Enter your email address"
          />
        </div>

        {/* Password Input */}
        <div className="w-full mb-4">
          <label htmlFor="password" className="text-white block text-left mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-[#2a2a2a] p-3 rounded-lg text-white outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="w-full flex justify-between text-sm text-gray-300 mb-8">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-lime-400"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I agree with the
            <span className="text-lime-400 cursor-pointer hover:underline">
              Terms and Conditions
            </span>
          </label>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-lime-400 text-black p-3 rounded-full font-bold transition-all hover:bg-lime-500"
        >
          Sign Up
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Signup;
