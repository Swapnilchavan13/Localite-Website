import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Import the CSS file
// import { Footer } from './Footer';

export const Login = () => {
  const [merchants, setMerchants] = useState([]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [loginPin, setLoginPin] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMerchants = async () => {
      try {
        const response = await fetch('https://localitebackend.localite.services/getmerchants');
        const data = await response.json();
        setMerchants(data);
      } catch (error) {
        console.error('Error fetching merchants:', error);
      }
    };

    fetchMerchants();
  }, []);

  const handleSignupClick = () => {
    navigate('/merchantform');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = merchants.find(
      (merchant) => merchant.contactPhoneNumber === mobileNumber && merchant.password === loginPin
    );

    if (user) {
      login(user.contactPhoneNumber); // Call login from AuthContext with user's phone number
      navigate('/merchant'); // Use navigate for redirection
    } else {
      setError('Invalid mobile number or PIN');
    }
  };

  return (
    <div className="login-container" style={{ 
      backgroundImage: "url('/bg2.png')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>
      <div id='centreimgdiv'>
      <img className='loginpinimg' src="w_logo.png" alt="" />
      <p className='ptaglogin'>We’re excited to  <br />
      have you onboard!</p>
      
      <br />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder='📞 Enter Registered Mobile Number'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="loginPin"
            value={loginPin}
            onChange={(e) => setLoginPin(e.target.value)}
            placeholder='🔐 Enter Login Password'
            required
          />
          <p style={{ textAlign:'left',color: 'grey'}}>(please use the details entered at the time of the sign-up.)</p>
        </div>
        {error && <p className="error-message">{error}</p>}
        {/* <p style={{color: 'red'}}>Forgot password?</p> */}
        <br />
        <button type="submit">Login</button>
        <p>(For already registered businesses)</p>
      <br />

      <button style={{color:'white'}} id='signupbtn' onClick={handleSignupClick}>Sign up</button>
      <p>(For listing your business)</p>
      </form>
      {/* <Footer /> */}
    </div>
  );
};
