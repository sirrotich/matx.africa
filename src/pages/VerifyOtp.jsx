import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate from react-router-dom
import '../styles/VerifyOtp.css';

const VerifyOtp = () => {
    const location = useLocation(); // Get the location object
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { email } = location.state || {}; // Extract email from state
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // State to hold 6 OTP values
    const inputRefs = useRef([]); // Ref to hold input elements

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value; // Update OTP value at the specified index
        setOtp(newOtp);

        // Move to the next input field if a value is entered
        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus(); // Focus on the next input
        }
        
        // Move back to the previous input field if the user deletes a character
        if (!value && index > 0) {
            inputRefs.current[index - 1].focus(); // Focus on the previous input
        }
    };

    const handleNext = () => {
        const otpString = otp.join(''); // Join OTP values into a string
        console.log(`OTP Entered: ${otpString}`);

        // Implement OTP verification logic here (e.g., API call)
        // If verification is successful, navigate to the dashboard
        if (otpString.length === 6) {
            // Navigate to the dashboard
            navigate('/dashboard'); // Ensure that '/dashboard' matches the route defined in your application
        }
    };

    return (
        <div className="login-page">
            <div className="login-form-container">
                <h1 className="login-title">Verify your identity</h1>
                <p className="otp-sent-message">
                    An authentication code has been sent to {email} {/* Display the email here */}
                </p>

                <div className="otp-input-container">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            value={value}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                // Allow only digits (0-9)
                                if (/^\d*$/.test(inputValue)) {
                                    handleOtpChange(inputValue, index);
                                }
                            }}
                            placeholder="--" // Tiny placeholder
                            maxLength="1" // Ensure only one character can be entered
                            ref={(el) => inputRefs.current[index] = el} // Assign ref to input
                        />
                    ))}
                </div>

                {/* Resend Code Text */}
                <p className="resend-code-text">
                    I didn’t receive code? <span className="resend-link">Resend Code</span>
                </p>

                <button className="send-code-button" onClick={handleNext} disabled={otp.some(val => val === '')}>
                    Next <span className="arrow-icon">→</span>
                </button>

                <div className="footer-text">
                    <div>By Signing In, you agree to our?</div>
                    <div className="terms-text">Terms and Conditions</div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;
