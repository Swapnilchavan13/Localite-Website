import React from 'react';
import '../styles/contact.css';

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, feel free to reach out to us.
      </p>
      
      <div className="contact-details">
        <h2>Our Contact Information</h2>
        <p><strong>Email:</strong> support@localite.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> Iskon Temple, Juhu, Mumbai</p>
      </div>
      
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
