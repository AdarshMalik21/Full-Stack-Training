import React, { useState } from "react";
import axiosInstance from "../api/axios.Instance";
import {useDispatch} from 'react-redux'
import { setAuth } from "../redux-card/authSlice";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    role: "user",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axiosInstance.post(
        "/api/register",
        formData,
      );
      dispatch(setAuth({
        token:response.data.token,
        user: response.data.user,
      }))


      setSuccess("Registration Successfull");
      console.log("Registration successful:", response.data);

      // Clear form after successful registration
      setFormData({
        username: "",
        email: "",
        password: "",
        phone: "",
        role: "user",
      });
    } catch (err) {
      setError(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Registration failed. Please try again.",
      );
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-500 to-pink-500 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h1>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p className="font-semibold">Error</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
            <p className="font-semibold">Success</p>
            <p className="text-sm">{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Minimum 6 characters"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-br from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-8"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?
          <a
            href="/login"
            className="text-purple-600 font-semibold hover:text-pink-600 ml-1"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
