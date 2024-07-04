import React from 'react';
import { Topnavbar } from './Topnavbar';
import { Footer } from './Footer';

// Careers component
const Careers = () => {
  return (
    <>
      <Topnavbar />
      <div style={styles.container}>
        {/* Page Header */}
        <h1>Careers at Localite</h1>
        <p>Join our team and help us build amazing products! We are looking for passionate and talented individuals to be a part of our growing team.</p>

        {/* Web/APP Developer Position */}
        <div style={styles.position}>
          <h2>Position: Web/APP Developer (Tech)</h2>
          <h3>Location: Juhu, Mumbai</h3>
          <h4>Job Description</h4>
          <p>We are seeking a skilled and motivated Web/APP Developer to join our team. As a Web/APP Developer at Localite, you will be responsible for designing, coding, and modifying websites and applications, from layout to function, according to our clients' specifications.</p>
        </div>

        {/* HR Admin Position */}
        <div style={styles.position}>
          <h2>Position: HR Admin</h2>
          <h3>Location: Juhu, Mumbai</h3>
          <h4>Job Description</h4>
          <p>We are looking for a dedicated HR Admin to manage our company's HR functions. The HR Admin will be responsible for maintaining employee records, managing recruitment, and overseeing onboarding processes.</p>
        </div>

        {/* Sales Executive Position */}
        <div style={styles.position}>
          <h2>Position: Sales Executive</h2>
          <h3>Location: Juhu, Mumbai</h3>
          <h4>Job Description</h4>
          <p>We are in search of a Sales Executive to drive our sales strategies and expand our customer base. As a Sales Executive, you will be responsible for identifying potential clients, building relationships, and closing sales deals.</p>
        </div>

        {/* Social Media Position */}
        <div style={styles.position}>
          <h2>Position: Social Media</h2>
          <h3>Location: Juhu, Mumbai</h3>
          <h4>Job Description</h4>
          <p>We are looking for a creative Social Media Specialist to manage our social media platforms. The ideal candidate will be responsible for creating engaging content, responding to followers, and analyzing social media performance metrics.</p>
        </div>

        {/* How to Apply */}
        <div style={styles.apply}>
          <h2>How to Apply</h2>
          <p>If you are excited about any of these opportunities and believe you have the skills and passion to contribute to our team, we would love to hear from you! Please send your resume to <a href="mailto:localite@alittleworld.com">localite@alittleworld.com</a>. Make sure to specify the position you are applying for in the subject line.</p>
          <p>We are looking forward to reviewing your application and potentially welcoming you to our team!</p>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

// Inline styles for the component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6'
  },
  position: {
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px'
  },
  apply: {
    marginTop: '40px',
    backgroundColor: '#e8e8e8',
    padding: '20px',
    borderRadius: '8px'
  },
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc'
  }
};

export default Careers;
