import React from 'react';
import { Topnavbar } from './Topnavbar';

// Terms component
const Return = () => {
  return (
    <>
    <Topnavbar />
    <div style={styles.container}>
      {/* Page Header */}
      <h1>Localite Return and Refund Policy</h1>

      {/* Terms Content */}
      <div style={styles.content}>
        <h2>1. Cancellation Policy</h2>
        <p>Orders placed on Localite cannot be canceled once confirmed. We request you to carefully review your order before making a purchase.</p>
        
        <h2>2. Return and Refund Policy</h2>
        <p>Returns and refunds are only applicable in cases where goods are received damaged or defective. The following conditions must be met for a successful return and refund:</p>
        <ul>Damage/Defect Reporting: Report any damaged or defective items within 48 hours of delivery by contacting our customer support team.</ul>
        <ul>Proof of Damage/Defect: Provide clear evidence of the damage or defect, including photos and a detailed description.</ul>

        <h2>3. Return Process</h2>
        <ul>1. Initiate a Return: Contact our customer support team within 48 hours of receiving a damaged or defective product.</ul>
        <ul>2. Return Approval: Our team will review your return request and provide approval if the conditions are met</ul>
        <ul>3. Return Pickup: We will arrange for a pickup of the damaged or defective item from your address.</ul>
        <ul>4. Refund Processing: Once we receive and verify the returned item, we will process the refund to your original payment method within 10 business days.</ul>

        <h2>4. Conditions for Return</h2>
        <p>To be eligible for a return, the product must meet the following criteria:</p>
        <ul>Correct Product: IMEI/serial number, MRP tag, and all accessories must be intact.</ul>
        <ul>Unused Product: The product must be unused, unwashed, and undamaged.</ul>
        <ul>Undamaged Packaging: The product must be in its original packaging.</ul>

        <h2>5. Exclusions</h2>
        <p>The following items are not eligible for return or refund:</p>
        <ul>Products that have been used or altered from their original condition.</ul>
        <ul>Products without their original packaging and accessories.</ul>
        <ul>Personal care items, customized products, and perishables.</ul>

        <p>For any further queries or to initiate a return, please contact our support team.</p>
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

export default Return;
