import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Footer } from './Footer';
import { Topnavbar } from './Topnavbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const MerchantForm = () => {
  const navigate = useNavigate();

  const categories = ['Automotive & Transport', 'Clothing', 'DryCleaning Services', 'Educationand Learning', 'Entertainment & Leisure', 'Food', 'Food & Beverages', 'Hair Care', 'Healthcare & Wellness', 'Home & Maintenance', 'Jewellery', 'Pet & Petcare', 'PersonalCare', 'Professional Services', 'Salon & Spa', 'Skin Care', 'Other'];
  
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

  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [otherBusinessType, setOtherBusinessType] = useState('');


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };



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
     // Clear otherBusinessType if another option is selected
     if (name === 'businessType' && value !== 'Other') {
      setOtherBusinessType('');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleOtherBusinessTypeChange = (e) => {
    setOtherBusinessType(e.target.value);
  };

  const handleBusinessTypeChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      businessType: value
    });
  };

    // Effect to handle updates when formData.businessType or otherBusinessType change
    useEffect(() => {
      // This code will run when formData.businessType or otherBusinessType changes
      const finalBusinessType = formData.businessType === 'Other' ? otherBusinessType : formData.businessType;
  
      // Handle the updated business type here (e.g., send to server, local processing, etc.)
      console.log('Updated Business Type:', finalBusinessType);
    }, [formData.businessType, otherBusinessType]);

  const handleSave = async (e) => {
    e.preventDefault();
  
    // Validation logic
  const requiredFields = [
    { field: 'personName', message: 'Person Name is compulsory. Please provide a Person Name.' },
    { field: 'lastName', message: 'Last Name is compulsory. Please provide a Last Name.' },
    { field: 'password', message: 'Password is compulsory. Please provide a Password.' },
    { field: 'businessName', message: 'Business Name is compulsory. Please provide a Business Name.' },
    { field: 'businessType', message: 'Business Type is compulsory. Please select a Business Type.' },
    { field: 'businessAddress', message: 'Business Address is compulsory. Please provide a Business Address.' },
    { field: 'contactEmail', message: 'Contact Email is compulsory. Please provide a Contact Email.' },
    { field: 'contactPhoneNumber', message: 'Phone Number is compulsory. Please provide a Phone Number.' },
    { field: 'operationHours', message: 'Operation Hours are compulsory. Please provide Operation Hours.' },
    { field: 'yearsOfBusiness', message: 'Years of Business is compulsory. Please provide Years of Business.' },
    { field: 'numberOfEmployees', message: 'Number of Employees is compulsory. Please provide Number of Employees.' },
    { field: 'productDescription', message: 'Product Description is compulsory. Please provide a Product Description.' },
    { field: 'preferredCategories', message: 'Preferred Categories are compulsory. Please select Preferred Categories.' },
    { field: 'offerFrequency', message: 'Offer Frequency is compulsory. Please provide Offer Frequency.' }
    ];

  for (const { field, message } of requiredFields) {
    if (!formData[field]) {
      alert(message);
      return;
    }
  }
  
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
  
      const serviceID = 'service_7sl4p61';
      const templateID = 'template_temjje3';
      const userID = 'PhuU7kore77nPwnF5';
  
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
  
      // Redirect to login page after successful submission
      navigate('/login');
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
    cursor: isChecked ? 'pointer' : 'not-allowed',
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


  const buttonStyle1 = {
    position: 'absolute',
    right: '30px',
    top: '40%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '0',
    fontSize: '16px',
    color: '#007BFF',
  };

  const containerStyle = {
    position: 'relative',
    marginBottom: '10px',
    width: '100%',
  };
  

  return (
    <>
      <Topnavbar />
      <div id='merchantform' style={formStyle}>
        <h1 style={headingStyle}>Merchant Registration Form (Form-1)</h1>
        <form onSubmit={handleSave}>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>Personal Information <span style={{color:'red'}}>*</span></h2>
            {/* <label style={labelStyle}>
              Profile Image:
              <input type="file" name="profileImage" onChange={handleChange} />
              <br />
              <br />
              {profileImageUrl && <img src={profileImageUrl} alt="Profile Preview" style={imagePreviewStyle} />}
            </label> */}
            <label style={labelStyle}>
              First Name:
              <input type="text" name="personName" value={formData.personName} onChange={handleChange} style={inputStyle} placeholder='First Name' />
            </label>
            <label style={labelStyle}>
              Last Name:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={inputStyle} placeholder='Last Name' />
            </label>
            <label style={{ display: 'block', marginBottom: '20px',fontWeight:'bold' }}>
      Set Password:
      <div style={containerStyle}>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          placeholder="This will be your login password for the Post Creation Form"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          style={buttonStyle1}
        >
          {showPassword ? 'Hide' : '👁'}
        </button>
      </div>

      <label style={labelStyle}>
              Brand Logo:
              <input type="file" name="brandLogo" onChange={handleChange} />
              <br />
              <br />
              {brandLogoUrl && <img src={brandLogoUrl} alt="Brand Logo Preview" style={imagePreviewStyle} />}
            </label>

    </label>
          </div>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>Business/Brands Information <span style={{color:'red'}}>*</span></h2>
            <label style={labelStyle}>
              Business/Brand Name:
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} style={inputStyle} placeholder='This is your brand name on Localite App'/>
            </label>
          

            <label style={labelStyle}>
        Business Type:
        <select 
          name="businessType" 
          value={formData.businessType} 
          onChange={handleChange} 
          style={inputStyle}
        >
          <option value="">Select Business Type</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </label>


        {formData.businessType === 'Other' && (
        <label style={labelStyle}>
          Please specify:
          <input 
            type="text" 
            name="otherBusinessType" 
            value={otherBusinessType} 
            onChange={handleOtherBusinessTypeChange} 
            style={inputStyle} 
            placeholder="Enter your category"
          />
        </label>
        )}


            <label style={labelStyle}>
              Business Address:
              <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleChange} style={inputStyle} placeholder='This is your place of business where customers can visit you' />
            </label>
            <label style={labelStyle}>
              Contact Email:
              <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} style={inputStyle} placeholder='Ex.abcd@gamil.com' />
            </label>
            <label style={labelStyle}>
              Contact Phone Number:
              <input type="text" name="contactPhoneNumber" value={formData.contactPhoneNumber} onChange={handleChange} style={inputStyle} placeholder='Ex.9876543210'/>
            </label>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Business Operations <span style={{color:'red'}}>*</span></h2>
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
            <h2 style={headingStyle}>Localite App Specifics <span style={{color:'red'}}>*</span></h2>
            <label style={labelStyle}>
  Preferred Categories:
  <select name="preferredCategories" value={formData.preferredCategories} onChange={handleChange} style={inputStyle}>
    <option value="">Select Preferred Category</option>
    {categories.map((category, index) => (
      <option key={index} value={category}>{category}</option>
    ))}
  </select>
</label>


<label style={labelStyle}>
  Expected Frequency of Offers:
  <select name="offerFrequency" value={formData.offerFrequency} onChange={handleChange} style={inputStyle}>
    <option value="">Select Offer Frequency</option>
    <option value="3 offers in a week">3 offers in a week</option>
    <option value="2 offers in a week">2 offers in a week</option>
    <option value="1 offer in a week">1 offer in a week</option>
    <option value="None">None</option>

  </select>
</label>

            <label style={labelStyle}>
              Specific Requirements:
              <input type="text" name="specificRequirements" value={formData.specificRequirements} onChange={handleChange} style={inputStyle} />
            </label>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Business Verification (Optional)</h2>
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
          <br />
          <p>
        <span>
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
        </span>
        I understand that the due payment will be made to the Localite representative deputed to me. My membership will be activated only post that.
      </p>
      <button 
        type="submit" 
        style={buttonStyle} 
        disabled={!isChecked} // Disable button when checkbox is not checked
      >
        Submit
      </button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
