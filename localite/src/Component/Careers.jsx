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

      {/* Developer Position */}
      <div style={styles.position}>
        <h2>Position: Developer</h2>
        <h3>Location: Juhu, Mumbai</h3>
        <h4>Job Description</h4>
        <p>We are seeking a skilled and motivated Developer to join our team. As a Developer at Localite, you will be responsible for designing, coding, and modifying websites and applications, from layout to function, according to our clients' specifications.</p>

        <h4>Responsibilities</h4>
        <ul style={styles.list}>
          <li>Write well-designed, testable, and efficient code by using best software development practices.</li>
          <li>Create website layout/user interface by using standard HTML/CSS practices.</li>
          <li>Integrate data from various back-end services and databases.</li>
          <li>Gather and refine specifications and requirements based on technical needs.</li>
          <li>Create and maintain software documentation.</li>
          <li>Stay plugged into emerging technologies/industry trends and apply them into operations and activities.</li>
          <li>Cooperate with web designers to match visual design intent.</li>
        </ul>

        <h4>Qualifications</h4>
        <ul style={styles.list}>
          <li>Proven working experience in web programming.</li>
          <li>Top-notch programming skills and in-depth knowledge of modern HTML/CSS.</li>
          <li>Familiarity with at least one of the following programming languages: PHP, ASP.NET, JavaScript, or Ruby on Rails.</li>
          <li>A solid understanding of how web applications work including security, session management, and best development practices.</li>
          <li>Adequate knowledge of relational database systems, Object Oriented Programming, and web application development.</li>
          <li>Hands-on experience with network diagnostics, network analytics tools.</li>
          <li>Basic knowledge of Search Engine Optimization process.</li>
          <li>Aggressive problem diagnosis and creative problem-solving skills.</li>
          <li>Strong organizational skills to juggle multiple tasks within the constraints of timelines and budgets with business acumen.</li>
          <li>Ability to work and thrive in a fast-paced environment, learn rapidly and master diverse web technologies and techniques.</li>
          <li>BS in computer science or a related field.</li>
        </ul>

        <h4>What We Offer</h4>
        <ul style={styles.list}>
          <li>Competitive salary and benefits.</li>
          <li>Flexible working hours.</li>
          <li>Opportunities for professional growth and development.</li>
          <li>A collaborative and supportive work environment.</li>
          <li>The chance to work on innovative projects with a dynamic team.</li>
        </ul>

        <h4>How to Apply</h4>
        <p>If you are interested in this position, please send your resume and a cover letter to <a href="mailto:localite@alittleworld.com">localite@alittleworld.com</a>. We look forward to hearing from you!</p>
      </div>
    </div>
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
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc'
  }
};

export default Careers;
