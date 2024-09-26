import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Create a navigate function

  const handleSendCode = () => {
    if (email) {
      console.log(`Code sent to ${email}`);
      navigate('/verify-otp', { state: { email } }); // Navigate to VerifyOtp with email
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="login-title">Login</h1>
        <p className="email-label">Enter your email address</p>

        <div className="email-input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <span className="email-icon">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6V8L12 13L4 8V6L12 11L20 6Z" fill="#000"/>
            </svg>
          </span>
        </div>

        <button className="send-code-button" onClick={handleSendCode}>
          Send Code <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
