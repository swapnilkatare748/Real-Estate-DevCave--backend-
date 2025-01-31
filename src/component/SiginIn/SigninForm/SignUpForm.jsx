import React, { useState } from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = ({onclose}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomCaptcha = Array.from({ length: 6 })
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");
    setCaptcha(randomCaptcha);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      setError("Captcha verification failed!");
      return;
    }
    setError("");
    alert("Sign-up successful!");
  };

  const handleSocialSignIn = (platform) => {
    alert(`Sign in with ${platform} coming soon!`);
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2>Create Your Account</h2>
        <button className={styles.closebutton} onClick={()=>{onclose(true)}}><i class="fa-solid fa-square-xmark"></i></button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter a secure password"
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="Re-enter your password"
            />
          </label>
          <div className={styles.captcha}>
            <span className={styles.captchaCode}>{captcha}</span>
            <button
              type="button"
              className={styles.refreshCaptcha}
              onClick={generateCaptcha}
            >
              Refresh Captcha
            </button>
          </div>
          <label>
            Enter Captcha:
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
              placeholder="Enter the captcha"
            />
          </label>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.socialButtons}>
            <button
              type="button"
              className={styles.googleButton}
              onClick={() => handleSocialSignIn("Google")}
            >
              Sign in with Google
            </button>
            <button
              type="button"
              className={styles.facebookButton}
              onClick={() => handleSocialSignIn("Facebook")}
            >
              Sign in with Facebook
            </button>
          </div>
          <button type="submit" onClick={()=>{onclose(true)}} className={styles.signUpButton}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
