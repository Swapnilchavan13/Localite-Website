import React from 'react';
import { Topnavbar } from './Topnavbar';

// Community component
const Community = () => {
  return (
    <>
    <Topnavbar />
    <div style={styles.container}>
      {/* Page Header */}
      <h1>Community</h1>
      <p>Welcome to the Localite Community! We're excited to offer you the opportunity to elevate your brand through strategic video placements and targeted marketing solutions.</p>

      {/* Main Content */}
      <div style={styles.content}>
        <h2>Empower Your Brand with Video</h2>
        <p>Give your brand the power of video at 20 high traffic areas in Juhu.</p>
        <p>Do what the multi-national brands do. Our app is used by Juhu’s top residents.</p>
        <p>Take your brand to them - 3 offers a week!</p>
        <p>Work with a team that provided social and marketing solutions to some of the world’s biggest brands.</p>
      </div>

      {/* Additional Information */}
      <div style={styles.section}>
        <h2>Why Choose Us?</h2>
        <ul style={styles.list}>
          <li>Access to high traffic areas in Juhu.</li>
          <li>Engage with top residents through our app.</li>
          <li>Three exclusive offers per week to promote your brand.</li>
          <li>Expert team with experience in global marketing solutions.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2>Join Our Community</h2>
        <p>Be a part of a vibrant community that supports and uplifts each other. Collaborate with us to take your brand to the next level.</p>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
    <br />
    <br />
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
  content: {
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px'
  },
  section: {
    marginTop: '20px'
  },
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc'
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Community;