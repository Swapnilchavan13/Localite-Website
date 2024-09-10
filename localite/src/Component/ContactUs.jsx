import React, { useState } from 'react';
import { Topnavbar } from './Topnavbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    questionType: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validate mobile number to allow only up to 10 digits
    if (name === 'mobile' && !/^\d{0,10}$/.test(value)) {
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, email, questionType, comment } = formData;

    const mailtoLink = `mailto:localite@alittleworld.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AMobile: ${mobile}%0D%0AEmail: ${email}%0D%0AQuestion Type: ${questionType}%0D%0AComment: ${comment}`;

    window.location.href = mailtoLink;

    setFormData({
      name: '',
      mobile: '',
      email: '',
      questionType: '',
      comment: ''
    });
  };

  return (
    <>
      <Topnavbar />
      <div className='contactus1'>
        <div style={{ width: '80%' }}>
          <h1>Contact Us</h1>
          <p>We would love to hear from you! If you have any questions or need assistance, please reach out to us through the following methods:</p>

          <div style={{ marginTop: '20px' }}>
            <h2>Phone</h2>
            <p>You can call us at: <a href="tel:7715973851">7715973851</a></p>
            <p>You can call us at: <a href="tel:7738448535">7738448535</a></p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2>Email</h2>
            <p>Feel free to email us at: <a href="mailto:localite@alittleworld.com">localite@alittleworld.com</a></p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2>Address</h2>
            <p>Localite Office, <br />1st Floor, Anand building, Juhu, <br /> Mumbai, India</p>
          </div>
        </div>

        <div className='contactform'>
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Name:
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  style={{ marginLeft: '10px', padding: '5px', width: '90%' }} 
                  required 
                />
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Contact Number:
                <input 
                  type="tel" 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleChange} 
                  style={{ marginLeft: '10px', padding: '5px', width: '90%' }} 
                  required 
                />
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Email:
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  style={{ marginLeft: '10px', padding: '5px', width: '90%' }} 
                />
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Question Type:
                <select 
                  name="questionType" 
                  value={formData.questionType} 
                  onChange={handleChange} 
                  style={{ marginLeft: '10px', padding: '5px', width: '90%' }} 
                  required
                >
                  <option value="">Select...</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Comment:
                <textarea 
                  name="comment" 
                  value={formData.comment} 
                  onChange={handleChange} 
                  style={{ marginLeft: '10px', padding: '5px', width: '90%', height: '100px' }} 
                  required 
                />
              </label>
            </div>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default ContactUs;
