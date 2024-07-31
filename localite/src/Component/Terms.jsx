import React from 'react';
import { Topnavbar } from './Topnavbar';
import { Footer } from './Footer';

// Terms component
const Terms = () => {
  return (
    <>
    <Topnavbar />
    <div style={styles.container}>
      {/* Page Header */}
      <h1>Terms and Conditions</h1>
      <h4>Welcome to Localite!</h4>
      <p>The Localite platform is operated by A LITTLE WORLD PRIVATE LIMITED ("Localite," "we," "us," or "our"), having its registered office located at First Floor, Anand Premises Building, Gandhi Gram Road, Juhu, Mumbai – 400049, India. By using the Localite services, including our website and mobile applications (collectively, "Localite Services"), you agree to these conditions. Please read them carefully.</p>

      {/* Terms Content */}
      <div style={styles.content}>
        <h2>1. Your Account</h2>
        <p>If you choose to use Localite Services, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your devices. You agree to accept responsibility for all activities that occur under your account or password. You should take all necessary steps to ensure that your password remains confidential and secure. You should inform us immediately if you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorized manner.</p>
        
        <h2>2. Privacy</h2>
        <p>Please review our [Privacy Notice](#), which also governs your use of Localite Services, to understand our practices.</p>

        <h2>3. E-Platform for Communication</h2>
        <p>You acknowledge that the website is an online platform that enables you to purchase products listed at the price indicated therein at any time from any location using the internet. Localite is only a facilitator and is not and cannot be a party to or control in any manner any transactions on the website.</p>

        <h2>4. Access to Localite</h2>
        <p>We will do our utmost to ensure that availability of Localite Services will be uninterrupted and that transmissions will be error-free. However, due to the nature of the internet, this cannot be guaranteed. Also, your access to Localite Services may also be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services. We will attempt to limit the frequency and duration of any such suspension or restriction.</p>

        <h2>5. Licence for Website Access</h2>
        <p>Localite grants you a limited licence to access and make personal use of Localite Services, but not to download (other than page caching) or modify it, or any portion of it, except with express written consent of Localite. This licence does not include any resale or commercial use of Localite Services or its contents; any collection and use of any product listings</p>
      </div>
    </div>
    <br />
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
  content: {
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

export default Terms;
