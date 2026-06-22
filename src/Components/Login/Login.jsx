import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";

import "./Login.css";
import logo from "../../assets/stacklyimg1.webp";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "attendee",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "email") {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailRegex =
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(formData.email.trim())) {
      setEmailError(
        "Only Gmail accounts are allowed (@gmail.com)"
      );
      return;
    }

    // API Login Logic Here

    localStorage.setItem("userRole", formData.role);

    if (formData.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* Back Button */}
        <button
          type="button"
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft />
          Back to Home
        </button>

        {/* Logo */}
        <div className="login-header">
          <div className="logo-container">
            <img
              src={logo}
              alt="Logo"
              className="login-logo"
            />
          </div>

          <h1>Welcome Back</h1>
          <p>Sign in to continue your journey</p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Role */}
          <div className="input-group">
            <label>Login As</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="attendee">
                User
              </option>

              <option value="admin">
                Admin
              </option>
            </select>
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your Gmail address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />

            {emailError && (
              <span
                style={{
                  color: "#ef4444",
                  fontSize: "13px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                {emailError}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="input-group password-group">
            <label>Password</label>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          {/* Signup */}
          <p className="signup-text">
            New User?{" "}
            <Link
              to="/signup"
              className="signup-link"
            >
              Create Account
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;