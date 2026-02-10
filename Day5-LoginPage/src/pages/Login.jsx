import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  // Validation Function
  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 6+ chars with letters & numbers";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleLogin = () => {
    if (!validate()) return;

    // If regex valid → success
    alert("Login Successful!");

    // Redirect
    navigate("/welcome");
  };

  return (
    <div className="login-container">
      
      {/* LEFT FORM */}
      <div className="login-card">

        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">Login</button>
          <button className="tab">Sign Up</button>
        </div>

        <h2>Welcome Back !</h2>
        <p>
          Log in to your account to connect with professionals
          and explore opportunities.
        </p>

        {/* Email */}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <span className="error">{errors.email}</span>
        )}

        <div className="password-box">

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  {/* Eye Icon */}
  <i
    className={
      showPassword
        ? "fa-solid fa-eye-slash toggle"
        : "fa-solid fa-eye toggle"
    }
    onClick={() =>
      setShowPassword(!showPassword)
    }
  ></i>

</div>


        {errors.password && (
          <span className="error">{errors.password}</span>
        )}

        <a className="forgot">Forgot Password</a>

        <Button label="Login" onClick={handleLogin} />

        <p className="or">Or Continue With</p>

        <div className="google">G</div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="illustration">
        <img
          src="/src/assets/login-illustration1.avif"
          alt="login"
        />
      </div>
    </div>
  );
};

export default Login;
