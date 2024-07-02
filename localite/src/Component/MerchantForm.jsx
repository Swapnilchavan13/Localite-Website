import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Footer } from './Footer';
import { Topnavbar } from './Topnavbar';

export const MerchantForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    businessAddress: '',
    contactPerson: '',
    contactEmail: '',
    contactPhoneNumber: '',
    websiteUrl: '',
    operationHours: '',
    yearsOfBusiness: '',
    numberOfEmployees: '',
    productDescription: '',
    preferredCategories: '',
    offerFrequency: '',
    specificRequirements: '',
    panTanNumber: '',
    gstin: '',
    bankAccountDetails: '',
    businessLicense: null,
    gstCertificate: null,
    panCard: null,
    proofOfAddress: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSave = () => {
    const doc = new jsPDF();
    doc.text('Merchant Registration Form', 10, 10);
    doc.text(`Business Name: ${formData.businessName}`, 10, 20);
    doc.text(`Business Type: ${formData.businessType}`, 10, 30);
    doc.text(`Business Address: ${formData.businessAddress}`, 10, 40);
    doc.text(`Contact Person: ${formData.contactPerson}`, 10, 50);
    doc.text(`Contact Email: ${formData.contactEmail}`, 10, 60);
    doc.text(`Contact Phone Number: ${formData.contactPhoneNumber}`, 10, 70);
    doc.text(`Website URL: ${formData.websiteUrl}`, 10, 80);
    doc.text(`Operation Hours: ${formData.operationHours}`, 10, 90);
    doc.text(`Years of Business: ${formData.yearsOfBusiness}`, 10, 100);
    doc.text(`Number of Employees: ${formData.numberOfEmployees}`, 10, 110);
    doc.text(`Description of Products/Services Offered: ${formData.productDescription}`, 10, 120);
    doc.text(`Preferred Categories: ${formData.preferredCategories}`, 10, 130);
    doc.text(`Expected Frequency of Offers: ${formData.offerFrequency}`, 10, 140);
    doc.text(`Specific Requirements: ${formData.specificRequirements}`, 10, 150);
    doc.text(`PAN/TAN Number: ${formData.panTanNumber}`, 10, 160);
    doc.text(`GSTIN: ${formData.gstin}`, 10, 170);
    doc.text(`Bank Account Details: ${formData.bankAccountDetails}`, 10, 180);

    // Save the PDF
    doc.save('Merchant_Registration_Form.pdf');

    // Create the email body
    const emailBody = `
    Business Information:
    - Business Name: ${formData.businessName}
    - Business Type: ${formData.businessType}
    - Business Address: ${formData.businessAddress}
    - Contact Person: ${formData.contactPerson}
    - Contact Email: ${formData.contactEmail}
    - Contact Phone Number: ${formData.contactPhoneNumber}
    - Website URL: ${formData.websiteUrl}

    Business Operations:
    - Operation Hours: ${formData.operationHours}
    - Years of Business: ${formData.yearsOfBusiness}
    - Number of Employees: ${formData.numberOfEmployees}
    - Description of Products/Services Offered: ${formData.productDescription}

    Localite App Specifics:
    - Preferred Categories: ${formData.preferredCategories}
    - Expected Frequency of Offers: ${formData.offerFrequency}
    - Specific Requirements: ${formData.specificRequirements}

    Financial Information:
    - PAN/TAN Number: ${formData.panTanNumber}
    - GSTIN: ${formData.gstin}
    - Bank Account Details: ${formData.bankAccountDetails}

    Declaration:
    (I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.)
    `;

    // Open the email client
    window.location.href = `mailto:localite@alittleworld.com?subject=Merchant Registration Form&body=${encodeURIComponent(emailBody)}`;
  };

  const formStyle = {
    maxWidth: '90%',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '95%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const headingStyle = {
    borderBottom: '2px solid #007BFF',
    paddingBottom: '10px',
    marginBottom: '20px',
    color: '#333',
  };

  return (
    <>
    <Topnavbar />
    <div style={formStyle}>
      <h1 style={headingStyle}>Merchant Registration Form</h1>
      <form>
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Business Information</h2>
          <label style={labelStyle}>
            Business Name:
            <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Business Type:
            <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Business Address:
            <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Contact Person:
            <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Contact Email:
            <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Contact Phone Number:
            <input type="text" name="contactPhoneNumber" value={formData.contactPhoneNumber} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Website URL:
            <input type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} style={inputStyle} />
          </label>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Business Operations</h2>
          <label style={labelStyle}>
            Operation Hours:
            <input type="text" name="operationHours" value={formData.operationHours} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Years of Business:
            <input type="text" name="yearsOfBusiness" value={formData.yearsOfBusiness} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Number of Employees:
            <input type="text" name="numberOfEmployees" value={formData.numberOfEmployees} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Description of Products/Services Offered:
            <input type="text" name="productDescription" value={formData.productDescription} onChange={handleChange} style={inputStyle} />
          </label>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Localite App Specifics</h2>
          <label style={labelStyle}>
            Preferred Categories:
            <input type="text" name="preferredCategories" value={formData.preferredCategories} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Expected Frequency of Offers:
            <input type="text" name="offerFrequency" value={formData.offerFrequency} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Specific Requirements:
            <input type="text" name="specificRequirements" value={formData.specificRequirements} onChange={handleChange} style={inputStyle} />
          </label>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Financial Information</h2>
          <label style={labelStyle}>
            PAN/TAN Number:
            <input type="text" name="panTanNumber" value={formData.panTanNumber} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            GSTIN:
            <input type="text" name="gstin" value={formData.gstin} onChange={handleChange} style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Bank Account Details:
            <input type="text" name="bankAccountDetails" value={formData.bankAccountDetails} onChange={handleChange} style={inputStyle} />
          </label>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Document Upload</h2>
          <label style={labelStyle}>
            Copy of Business License:
            <input type="file" name="businessLicense" onChange={handleChange} />
          </label>
          <label style={labelStyle}>
            GST Certificate:
            <input type="file" name="gstCertificate" onChange={handleChange} />
          </label>
          <label style={labelStyle}>
            PAN Card of Business:
            <input type="file" name="panCard" onChange={handleChange} />
          </label>
          <label style={labelStyle}>
            Proof of Address:
            <input type="file" name="proofOfAddress" onChange={handleChange} />
          </label>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Declaration</h2>
          <p>
            I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.
          </p>
        </div>

        <button type="button" onClick={handleSave} style={buttonStyle}>Save Details</button>
      </form>
    </div>
    <br />
    <br />
    <br />

    <Footer />
    </>
  );
};
