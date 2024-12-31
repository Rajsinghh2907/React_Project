import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../constant/backapi";

// Fetch backend URL from environment variables
// const backendUrl = import.meta.env.VITE_BACKEND_URL;

function LoginModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      console.log("Attempting login with:", { username, password });
      setLoading(true);
      const response = await axios.post(`${backendUrl}/api/auth/login`, { username, password });
      console.log("Login success:", response.data);

      localStorage.setItem("token", response.data.token); // Store JWT token
      setError("");
      navigate("/"); // Redirect to home page
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response ? err.response.data.error : "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-auto py-16">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <label htmlFor="username" className="block mb-2 text-lg">Username</label>
        <input
          id="username"
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" className="block mb-2 text-lg">Password</label>
        <input
          id="password"
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-600 font-bold">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginModal;
