import React, { useState } from 'react';
import { Topnavbar } from './Topnavbar';
import { Footer } from './Footer';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    questionType: '',
    comment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // For success message

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

    // EmailJS parameters for admin email
    const adminTemplateParams = {
      to_name: "Localite Admin", // The receiver's name (admin)
      from_name: name, // The user's name
      message: `Mobile: ${mobile}\nEmail: ${email}\nQuestion Type: ${questionType}\nComment: ${comment}`, // The message content
      reply_to: email // The user's email for reply
    };

    // EmailJS parameters for user auto-reply email
    const userTemplateParams = {
      to_name: name, // The user's name
      from_name: "Localite Support Team", // The name of the sender (you)
      message: `Thank you for contacting us! We've received your message and will get back to you soon.\n\nDetails you submitted:\nMobile: ${mobile}\nEmail: ${email}\nQuestion Type: ${questionType}\nComment: ${comment}`, // The message content
      reply_to: email, // Your support email
      user_email: email // The user's email where the thank-you message will be sent
    };

    // Send email to admin
    emailjs.send('service_i9j329k', 'template_2h2y23w', adminTemplateParams, 'KpIJ_qUujjm-qYHat')
      .then((response) => {
        console.log('Admin email sent successfully!', response.status, response.text);

        // Send auto-reply email to user
        emailjs.send('service_i9j329k', 'template_266swor', userTemplateParams, 'KpIJ_qUujjm-qYHat')
          .then((response) => {
            console.log('Auto-reply sent to user successfully!', response.status, response.text);
          }, (error) => {
            console.error('Failed to send auto-reply to user...', error);
          });

        setIsSubmitted(true);
        setFormData({
          name: '',
          mobile: '',
          email: '',
          questionType: '',
          comment: ''
        });
      }, (error) => {
        console.error('Failed to send email to admin...', error);
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
          {isSubmitted ? (
            <p>Thank you for your message! We will get back to you soon.</p>
          ) : (
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
            <button type="submit" style={{width:'80%', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
          )}
        </div>
      </div>
      <Footer />
      
      <style>
        {`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }

        .contactus1 {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 20px;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin: 20px auto;
          max-width: 1200px;
          border-radius: 10px;
        }

        h1, h2 {
          color: #333;
        }

        p {
          color: #666;
          line-height: 1.6;
        }

        a {
          color: #007BFF;
          text-decoration: none;
        }

        .contactus1 > div:first-child {
          flex: 1;
          min-width: 300px;
          padding: 20px;
        }

        .contactform {
          flex: 1;
          min-width: 300px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
        }

        .contactform form {
          display: flex;
          flex-direction: column;
        }

        .contactform label {
          margin-bottom: 10px;
          font-weight: bold;
          color: #333;
        }

        .contactform input, 
        .contactform select, 
        .contactform textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }

        .contactform textarea {
          resize: vertical;
        }

        .contactform button {
          margin-top: 20px;
          padding: 12px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contactform button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .contactus1 {
            flex-direction: column;
            align-items: center;
          }

          .contactform, 
          .contactus1 > div:first-child {
            width: 100%;
            margin-bottom: 20px;
          }

          .contactform button {
            width: 100%;
          }
        }
        `}
      </style>
    </>
  );
};

export default ContactUs;
