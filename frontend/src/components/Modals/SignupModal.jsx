import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { VITE_BACKEND_URL } from "../constants/backApi"; // Import the backend URL

function SignupModal() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${VITE_BACKEND_URL}/api/auth/signup`, { username, email, password, confirmPassword }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setError("");
      navigate("/sign-in");
    } catch (err) {
      console.log(err);
      setError(err.response ? err.response.data.error : "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-auto py-16">
      <h1 className="text-2xl font-semibold mb-4">Signup</h1>
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

        <label htmlFor="email" className="block mb-2 text-lg">Email</label>
        <input
          id="email"
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="block mb-2 text-lg">Password</label>
        <input
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword" className="block mb-2 text-lg">Confirm Password</label>
        <input
          id="confirmPassword"
          type={isPasswordVisible ? "text" : "password"}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Signup"}
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-blue-600 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupModal;