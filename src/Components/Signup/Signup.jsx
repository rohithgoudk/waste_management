import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/stacklyimg1.webp";

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required.";
    } else if (form.username.trim().length < 3) {
      newErrors.username = "At least 3 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(form.username.trim())) {
      newErrors.username = "Username can contain only alphabets.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@gmail\.com$/.test(form.email)) {
      newErrors.email = "Only Gmail addresses are allowed (e.g. you@gmail.com).";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      newErrors.password = "At least 8 characters.";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!form.agreed) {
      newErrors.agreed = "You must accept the terms to continue.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Block numbers in username field
    if (name === "username" && /[0-9]/.test(value)) return;

    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="signup-page">
        <div className="bg-blob blob-1" />
        <div className="bg-blob blob-2" />
        <div className="signup-card success-card">
          <div className="success-icon">🎉</div>
          <h2>Account created!</h2>
          <p>Welcome aboard, <strong>{form.username}</strong>. Your account is ready.</p>
          <button className="btn-primary" onClick={() => navigate("/")}>
            Go to Login →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-page">
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      <div className="signup-card">

      <button
  type="button"
  className="back-home-btn"
  onClick={() => navigate("/")}
>
  ← Back to Home
</button>
        {/* Header */}
        <div className="signup-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="login-logo" />
          </div>
          <h1>Create your account</h1>
          <p>Join thousands of event managers on Stackly.</p>
        </div>

        {/* Social login */}
        <div className="social-row">
          <button className="social-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
          <button className="social-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.119 20.452H3.558V8.999h3.561v11.453zM5.338 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zm15.114 13.019h-3.556v-5.569c0-1.328-.025-3.038-1.851-3.038-1.853 0-2.136 1.447-2.136 2.941v5.666H9.353V8.999h3.414v1.561h.049c.475-.9 1.637-1.85 3.369-1.85 3.603 0 4.267 2.372 4.267 5.455v6.287z" />
            </svg>
            Continue with LinkedIn
          </button>
        </div>

        {/* Divider */}
        <div className="divider">
          <span>or sign up with email</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>

          {/* Username */}
          <div className={`field ${errors.username ? "has-error" : ""}`}>
            <label htmlFor="username">Username</label>
            <div className="input-wrap">
              <span className="input-icon">👤</span>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Alex"
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
              />
            </div>
            {errors.username && <p className="error-msg">{errors.username}</p>}
          </div>

          {/* Email */}
          <div className={`field ${errors.email ? "has-error" : ""}`}>
            <label htmlFor="email">Email address</label>
            <div className="input-wrap">
              <span className="input-icon">✉️</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@gmail.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className={`field ${errors.password ? "has-error" : ""}`}>
            <label htmlFor="password">Password</label>
            <div className="input-wrap">
              <span className="input-icon">🔒</span>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="toggle-pw"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // Eye-off SVG
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  // Eye SVG
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {errors.password && <p className="error-msg">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className={`field ${errors.confirmPassword ? "has-error" : ""}`}>
            <label htmlFor="confirmPassword">Confirm password</label>
            <div className="input-wrap">
              <span className="input-icon">🔐</span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Repeat your password"
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="toggle-pw"
                onClick={() => setShowConfirm((v) => !v)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                {showConfirm ? (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword}</p>}
          </div>

          {/* Terms checkbox */}
          <div className={`field checkbox-field ${errors.agreed ? "has-error" : ""}`}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreed"
                checked={form.agreed}
                onChange={handleChange}
              />
              <span className="checkbox-box">
                {form.agreed && <span className="checkbox-check">✓</span>}
              </span>
              <span className="checkbox-text">
                I agree to the{" "}
                <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
                {" "}and{" "}
                <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              </span>
            </label>
            {errors.agreed && <p className="error-msg">{errors.agreed}</p>}
          </div>

          {/* Submit */}
          <button type="submit" className="btn-primary">
            Create account
            <span className="btn-arrow">→</span>
          </button>
        </form>

        {/* Footer */}
        <p className="signin-link">
          Already have an account?{" "}
          <a href="#login" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;