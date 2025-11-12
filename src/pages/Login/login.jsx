import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // ✅ Added Link

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        username,
        password,
      });

      if (response.data.status === "success") {
        setMessage("✅ Login Successful!");
        localStorage.setItem("username", response.data.username);
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response?.status === 401) {
        setMessage("❌ Invalid username or password");
      } else {
        setMessage("⚠️ Server not reachable or other error");
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/images/hh2.jpg')",
      }}
    >
      {/* Glassmorphic Login Box */}
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 w-[90%] max-w-sm border border-white/30">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 drop-shadow-lg">
          LOGIN HERE
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label
            htmlFor="username"
            className="text-gray-800 font-semibold mb-1 text-sm"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-3 mb-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your username"
            required
          />

          <label
            htmlFor="password"
            className="text-gray-800 font-semibold mb-1 text-sm"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 mb-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-all duration-200 hover:scale-[1.02]"
          >
            Login
          </button>

          {message && (
            <p
              className={`text-center mt-4 font-medium ${
                message.includes("✅")
                  ? "text-green-600"
                  : message.includes("❌")
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}
            >
              {message}
            </p>
          )}

          {/* ✅ Links Section */}
          <div className="text-center mt-4 space-y-2">
            <a
              href="#"
              className="block text-sm text-gray-900 hover:text-orange-600 transition-all"
            >
              Forgot password?
            </a>

            {/* ✅ Added Create Account link */}
            <Link
              to="/register"
              className="block text-sm text-gray-900 hover:text-orange-600 transition-all font-semibold"
            >
              New User? Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
