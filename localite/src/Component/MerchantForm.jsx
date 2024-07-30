import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Footer } from './Footer';
import { Topnavbar } from './Topnavbar';
import axios from 'axios';

export const MerchantForm = () => {
  const categories = ['Automotive&Transport', 'Clothing', 'DryCleaningServices', 'EducationandLearning', 'Entertainment&Leisure', 'Food', 'Food&Beverages', 'Handbags', 'Healthcare&Wellness', 'Home&Maintenance', 'Jewellery', 'PersonalCare', 'ProfessionalServices', 'Skin Care'];
  
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    businessAddress: '',
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
    profileImage: null,
    personName: '',
    lastName: '',
    password: '',
    numberOfPeople: '',
    brandLogo: null,
  });

  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [brandLogoUrl, setBrandLogoUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      if (name === 'profileImage') {
        setProfileImageUrl(url);
      } else if (name === 'brandLogo') {
        setBrandLogoUrl(url);
      }
      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('https://localitebackend.localite.services/addmerchants', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Data submitted successfully:', response.data);
      alert("Data is Submitted to Localite team");

      const serviceID = 'service_qd6wjis';
      const templateID = 'template_38jnodk';
      const userID = 'qAkPR5RhKGseM24tp';

      const emailParams = {
        business_name: formData.businessName,
        business_type: formData.businessType,
        business_address: formData.businessAddress,
        contact_email: formData.contactEmail,
        contact_phone_number: formData.contactPhoneNumber,
        password: formData.password
      };

      await emailjs.send(serviceID, templateID, emailParams, userID);

      setFormData({
        businessName: '',
        businessType: '',
        businessAddress: '',
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
        profileImage: null,
        personName: '',
        lastName: '',
        password: '',
        numberOfPeople: '',
        brandLogo: null,
      });
      setProfileImageUrl(null);
      setBrandLogoUrl(null);

    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };

  const formStyle = {
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

  const imagePreviewStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  return (
    <>
      <Topnavbar />
      <div id='merchantform' style={formStyle}>
        <h1 style={headingStyle}>Merchant Registration Form (Form-1)</h1>
        <form onSubmit={handleSave}>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>Personal Information</h2>
            <label style={labelStyle}>
              Profile Image:
              <input type="file" name="profileImage" onChange={handleChange} />
              <br />
              <br />
              {profileImageUrl && <img src={profileImageUrl} alt="Profile Preview" style={imagePreviewStyle} />}
            </label>
            <label style={labelStyle}>
              Person Name:
              <input type="text" name="personName" value={formData.personName} onChange={handleChange} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Last Name:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Set Password:
              <input type="text" name="password" value={formData.password} onChange={handleChange} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Brand Logo:
              <input type="file" name="brandLogo" onChange={handleChange} />
              <br />
              <br />
              {brandLogoUrl && <img src={brandLogoUrl} alt="Brand Logo Preview" style={imagePreviewStyle} />}
            </label>
          </div>


          <div style={sectionStyle}>
            <h2 style={headingStyle}>Business Information</h2>
            <label style={labelStyle}>
              Business Name:
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Business Type:
              <select name="businessType" value={formData.businessType} onChange={handleChange} style={inputStyle}>
                <option value="">Select Business Type</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </label>
            <label style={labelStyle}>
              Business Address:
              <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleChange} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Contact Email:
              <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Contact Phone Number:
              <input type="text" name="contactPhoneNumber" value={formData.contactPhoneNumber} onChange={handleChange} style={inputStyle} />
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
            <h2 style={headingStyle}>Business Verification</h2>
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
            <label style={labelStyle}>
              Business License:
              <input type="file" name="businessLicense" onChange={handleChange} />
            </label>
            <label style={labelStyle}>
              GST Certificate:
              <input type="file" name="gstCertificate" onChange={handleChange} />
            </label>
            <label style={labelStyle}>
              PAN Card:
              <input type="file" name="panCard" onChange={handleChange} />
            </label>
            <label style={labelStyle}>
              Proof of Address:
              <input type="file" name="proofOfAddress" onChange={handleChange} />
            </label>
          </div>

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
