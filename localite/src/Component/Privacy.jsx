import React from 'react';
import { Topnavbar } from './Topnavbar';

// Terms component
const Privacy = () => {
  return (
    <>
    <Topnavbar />
    <div style={styles.container}>
      {/* Page Header */}
      <h1>Localite Privacy Notice</h1>
      <h3>Last updated: 31-07-2024</h3>
      <h4>Introduction</h4>
      <p>We at Localite, managed by A LITTLE WORLD PRIVATE LIMITED, value your trust in our services. This Privacy Notice explains how we collect, handle, and use personal information through the Localite app, services, and websites that refer to this notice. By using Localite services, you agree to the use of your personal information as described in this notice.</p>

      {/* Terms Content */}
      <div style={styles.content}>
        <h2>Personal Information We Collect</h2>
        <p>To provide and enhance our services, we collect the following types of information:</p>
        
            <ul>Information You Provide: We receive and store any information you enter on our website or give us in any other way. This may include, but is not limited to, your name, email address, phone number, and transaction history.</ul>
            <ul>Automatic Information: We automatically collect information when you use Localite services, like information about your interactions with our platform and content, details of your location, and device information.</ul>
            <ul>Information from Other Sources: We might receive information about you from other sources and add it to our account information. This includes demographic and navigation data.</ul>
        
        <h2>Purposes for Which We Use Your Personal Information</h2>
        <p>We use your personal information to:</p>
        
            <ul>Operate, provide, develop, and improve Localite services.</ul>
            <ul>Communicate with you about orders, products, services, and promotional offers.</ul>
            <ul>Provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Localite services.</ul>
            <ul>Recommend features, products, and services that might be of interest to you, personalize your experience with Localite.</ul>

        <h2>Sharing of Personal Information</h2>
        <p>We do not sell personal information to others. We share personal information only as described below:</p>
        
            <ul>Transactions Involving Third Parties: We make available services and products provided by third parties for use on or through Localite services.</ul>
            <ul>Third-Party Service Providers: We employ other companies and individuals to perform functions on our behalf.</ul>
            <ul>Business Transfers: In the event that Localite or substantially all of its assets are acquired, customer information will be one of the transferred assets.</ul>
            <ul>Protection of Localite and Others: We release account and other personal information when we believe release is appropriate to comply with the law, enforce or apply our agreements, or protect the rights, property, or safety of Localite, our users, or others.</ul>
        

        <h2>How Secure Is Information About Me?</h2>
        <p>We design our systems with your security and privacy in mind. We work to protect the security of your information during transmission by using encryption protocols and software and follow the Payment Card Industry Data Security Standard (PCI DSS).</p>

        <h2>Choices You Have</h2>
        <p>You can always choose not to provide certain information, but then you might not be able to take advantage of many Localite services. You can add or update certain information, and when you update information, we usually keep a copy of the prior version for our records.</p>
      
        <h2>Conditions of Use, Notices, and Revisions</h2>
        <p>If you choose to use Localite Services, your use and any dispute over privacy are subject to this Notice and our Conditions of Use, including limitations on damages and resolution of disputes.</p>
      
        <h2>Contact Information</h2>
        <p>For any concerns about privacy at Localite, please contact us with a thorough description, and we will try to resolve it. Our contact details are:</p>
      <ul>Email: devram.gadhave@alittleworld.com</ul>
      <ul>Phone: 9967555117</ul>
      <ul>Address: A LITTLE WORLD PRIVATE LIMITED, First Floor, Anand Premises Building, Gandhi Gram Road, Juhu, Mumbai – 400049</ul>

      <br />
      <h3>This Privacy Notice applies to all the information we have about you and your account unless stated otherwise. Changes to this Privacy Notice will be mentioned on this page with an updated revision date.</h3>
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
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc'
  }
};

export default Privacy;
