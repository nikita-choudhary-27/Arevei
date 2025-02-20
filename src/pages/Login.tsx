import React, { useState } from "react";
import login from "../assets/login/login.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    navigate("/signup");
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        // Save token to localStorage or state management
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-black min-h-screen flex pl-20">
      {/* Image Section */}
      <div className="w-1/2 hidden md:flex items-center justify-center ">
        <img src={login} alt="Login Illustration" className="max-w-full" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-20">
        <img src="/logo.png" alt="Logo" className="w-32 mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Welcome back</h1>
        <p className="text-gray-400 text-lg mb-2">
          Time to unlock the fun! Enter your information to login.
        </p>

        <p className="text-lg text-white mb-6">
          New here?{" "}
          <span
            onClick={handleClick}
            className="text-lime-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

        {/* Email Input */}
        <div className="w-full mb-4">
          <label htmlFor="email" className="text-white block text-left mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#2a2a2a] p-3 rounded-lg text-white outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="w-full flex justify-between text-sm text-gray-300 mb-8">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-lime-400 " />
            Remember me
          </label>
          <p className="text-lime-400 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-lime-400 text-black p-3 rounded-full font-bold transition-all hover:bg-lime-500"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
