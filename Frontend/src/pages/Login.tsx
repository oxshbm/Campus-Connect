import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    instituteIdentifier: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", formData);
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/images/dr06_5ev7_230323.jpg')", // Replace with actual path or cloud URL
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Campus-Connect Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Institute ID or Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institute Email or ID
            </label>
            <input
              type="text"
              name="instituteIdentifier"
              value={formData.instituteIdentifier}
              onChange={handleChange}
              required
              placeholder="you@student.institute.edu or 123456"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
