import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios.Instance";
import { setAuth } from "../redux-card/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setLoading(true);

    try {
      const response = await axiosInstance.post("/api/login", formData);

      // Save token and user data to Redux
      dispatch(
        setAuth({
          token: response.data.token,
          user: response.data.user,
        }),
      );

      console.log("Login successful:", response.data);

      // Redirect to home page after successful login
      navigate("/");

      // Clear form
      setFormData({
        email: "",
        password: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-500 to-pink-500 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h1>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p className="font-semibold">Error</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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
              placeholder="Enter your password"
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?
          <a
            href="/register"
            className="text-purple-600 font-semibold hover:text-pink-600 ml-1"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
