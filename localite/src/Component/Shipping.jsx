import React from 'react';
import { Topnavbar } from './Topnavbar';

// Terms component
const Shipping = () => {
  return (
    <>
    <Topnavbar />
    <div style={styles.container}>
      {/* Page Header */}
      <h1>Localite Shipping Policy</h1>

      {/* Terms Content */}
      <div style={styles.content}>
        <h2>1. Delivery Charges</h2>
        <p>Delivery charges vary with each merchant. They may apply nominal delivery charges on low-value items to offset logistics costs. Check your order summary to understand the delivery charges for individual products.</p>
        
        <h2>2. Delivery Timeline</h2>
        <p>Delivery timelines may vary based on:</p>
        <ul>- The merchant offering the product.</ul>
        <ul>- Product availability with the merchant.</ul>
        <ul>- Your shipping destination and the merchant's location.</ul>

        <p>Please note that the estimated delivery time is influenced by these factors and may differ for each seller. Enter your pin code on the product page for accurate delivery timelines.</p>

        <h2>3. Hidden Costs</h2>
        <p>There are no hidden charges when you make a purchase on Localite. Prices are final and all-inclusive. Delivery charges, if applicable, are clearly indicated.</p>

        <h2>4. Serviceability</h2>
        <p>Serviceability depends on:</p>
        <ul>- Whether the merchant ships to your location.</ul>
        <ul>- Legal restrictions, if any, on shipping certain products to your area.</ul>
        <ul>- Availability of reliable courier partners in your location.</ul>

        <p>Enter your pin code to check if a product can be delivered to your location.</p>

        <h2>5. Cash on Delivery (CoD)</h2>
        <p>CoD availability depends on the courier partner's ability to accept cash at your location and may have limits on the payable amount. Enter your pin code to check if CoD is available.</p>
      
        <h2>6. Returns and Pick-up</h2>
        <p>Returns are easy and facilitated through Localite. Contact us to initiate a return. If the pick-up cannot be arranged through our logistics partner, you can return the item via a third-party courier service. Return fees are borne by the merchant.</p>

        <h2>7. Non-Delivery Issues</h2>
        <p>If you do not receive your order but get a delivery confirmation, report the issue within 7 days from the delivery confirmation date for investigation.</p>

        <h2>8. Product Availability</h2>
        <ul>- In Stock: Items are available and will be delivered within the specified time.</ul>
        <ul>- Available: Items can be procured by the merchant upon order.</ul>
        <ul>- Preorder/Forthcoming: Items can be pre-booked and will be shipped upon release.</ul>
        <ul>- Out of Stock: Items are currently unavailable.</ul>
        <ul>- Imported: Items sourced from outside India and may take longer to deliver.</ul>
        <ul>- Temporarily Unavailable: Items are out of stock but might be restocked soon.</ul>
        <ul>- Permanently Discontinued: Items are no longer available.</ul>
        <ul>- Out of Print: Items are no longer being published.</ul>      

        <h2>9. International Shipping</h2>
        <p>Localite does not offer international shipping. Purchases can be made with credit/debit cards issued in India and select other countries, but delivery addresses must be within India.</p>

        <p>For any further queries, please contact our support team.
        </p>
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

export default Shipping;
