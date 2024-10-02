import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Track input focus state
  const navigate = useNavigate();

  const handleSendCode = () => {
    if (isValidEmail) {
      console.log(`Code sent to ${email}`);
      navigate('/verify-otp', { state: { email } });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="login-title">Login</h1>
        <p className="email-label">Enter your email address</p>

        <div className={`email-input-container ${isFocused ? 'focused' : ''}`}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setIsFocused(true)} // Set focus state to true
            onBlur={() => setIsFocused(false)} // Reset focus state on blur
            placeholder="Your Email"
            required
          />
          <span className="email-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 7C2.75 6.30964 3.30964 5.75 4 5.75H20C20.6904 5.75 21.25 6.30964 21.25 7V17C21.25 17.6904 20.6904 18.25 20 18.25H4C3.30964 18.25 2.75 17.6904 2.75 17V7ZM4 4.25C2.48122 4.25 1.25 5.48122 1.25 7V17C1.25 18.5188 2.48122 19.75 4 19.75H20C21.5188 19.75 22.75 18.5188 22.75 17V7C22.75 5.48122 21.5188 4.25 20 4.25H4ZM7.4301 8.38557C7.09076 8.14804 6.62312 8.23056 6.38558 8.5699C6.14804 8.90924 6.23057 9.37689 6.56991 9.61442L11.5699 13.1144C11.8281 13.2952 12.1719 13.2952 12.4301 13.1144L17.4301 9.61442C17.7694 9.37689 17.852 8.90924 17.6144 8.5699C17.3769 8.23056 16.9092 8.14804 16.5699 8.38557L12 11.5845L7.4301 8.38557Z" fill="#292927"/>
</svg>

          </span>
        </div>

        <button
          className={`send-code-button ${!isValidEmail ? 'disabled' : ''}`}
          onClick={handleSendCode}
          disabled={!isValidEmail}
        >
          Send Code <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
