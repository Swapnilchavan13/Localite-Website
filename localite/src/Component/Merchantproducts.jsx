import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

import { useAuth } from './AuthContext';

export const Merchantproducts = () => {
  const [mrp, setMrp] = useState('');
  const { user, logout } = useAuth();
  const [appSection, setAppSection] = useState('offers');
  const [productCategory, setProductCategory] = useState('Product');
  const [brand, setBrand] = useState('');
  const [brandImage, setBrandImage] = useState(null);
  const [title, setTitle] = useState('');
  const [offerHeadline, setOfferHeadline] = useState('NA');
  const [description, setDescription] = useState('');
  const [excerptDescription, setExcerptDescription] = useState('NA');
  const [photo, setPhoto] = useState(null);
  const [videoLink, setVideoLink] = useState('');
  const [photo2, setPhoto2] = useState(null);
  const [additionalPhoto1, setAdditionalPhoto1] = useState(null);
  const [additionalPhoto2, setAdditionalPhoto2] = useState(null);
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [productCategories, setProductCategories] = useState([]);
  const [entryCount, setEntryCount] = useState('');
  const [unit, setUnit] = useState(0);


  // Preview states
  const [brandImagePreview, setBrandImagePreview] = useState('');
  const [photoPreview, setPhotoPreview] = useState('');
  const [photo2Preview, setPhoto2Preview] = useState('');
  const [additionalPhoto1Preview, setAdditionalPhoto1Preview] = useState('');
  const [additionalPhoto2Preview, setAdditionalPhoto2Preview] = useState('');

  const [merchantData, setMerchantData] = useState(null);


  const [isSubmitting, setIsSubmitting] = useState(false);
const [uploadStatus, setUploadStatus] = useState(''); // For the popup message

const [showSecondPhotoField, setShowSecondPhotoField] = useState(false);
  const [showThirdPhotoField, setShowThirdPhotoField] = useState(false);

  const handleToggleSecondFile = () => {
    setShowSecondPhotoField((prev) => !prev);
  };

  // Toggle function to show/hide third photo field
  const handleToggleThirdFile = () => {
    setShowThirdPhotoField((prev) => !prev);
  };

  const handleFileChange = (e, setter, previewSetter) => {
    const file = e.target.files[0];
    setter(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      previewSetter(reader.result);
    };
    reader.readAsDataURL(file);
  };


useEffect(() => {
  const calculatedPrice = mrp - (mrp * discountedPrice / 100);
  setPrice(calculatedPrice);
}, [mrp, discountedPrice]);


const handleDiscountChange = (e) => {
  const value = Math.min(Math.max(0, e.target.value), 100); // Limit discount between 0 and 100
  setDiscountedPrice(value);
};

const handleSelection = (type) => {
  setProductCategory(type); // Update the state with the selected type
};


const handleRemovePhoto = () => {
  setPhoto(null);
  setPhotoPreview(null);
};

const handleRemovePhoto2 = () => {
  setPhoto2(null);
  setPhoto2Preview(null);
};

const handleRemoveAdditionalPhoto1 = () => {
  setAdditionalPhoto1(null);
  setAdditionalPhoto1Preview(null);
};


  useEffect(() => {
    // Fetch product categories dynamically
    const categories = ['Automotive&Transport', 'Clothing', 'DryCleaningServices', 'EducationandLearning', 'Entertainment&Leisure', 'Food', 'Food&Beverages', 'Handbags', 'Healthcare&Wellness', 'Home&Maintenance', 'Jewellery', 'PersonalCare', 'ProfessionalServices', 'Skin Care'];
    setProductCategories(categories);
  }, []);

  useEffect(() => {
    if (brandImage) {
      setBrandImagePreview(URL.createObjectURL(brandImage));
    } else {
      setBrandImagePreview('');
    }
  }, [brandImage]);

  useEffect(() => {
    if (photo) {
      setPhotoPreview(URL.createObjectURL(photo));
    } else {
      setPhotoPreview('');
    }
  }, [photo]);

  useEffect(() => {
    if (photo2) {
      setPhoto2Preview(URL.createObjectURL(photo2));
    } else {
      setPhoto2Preview('');
    }
  }, [photo2]);

  useEffect(() => {
    if (additionalPhoto1) {
      setAdditionalPhoto1Preview(URL.createObjectURL(additionalPhoto1));
    } else {
      setAdditionalPhoto1Preview('');
    }
  }, [additionalPhoto1]);

  useEffect(() => {
    if (additionalPhoto2) {
      setAdditionalPhoto2Preview(URL.createObjectURL(additionalPhoto2));
    } else {
      setAdditionalPhoto2Preview('');
    }
  }, [additionalPhoto2]);

  useEffect(() => {
    if (user) {
      fetch(`https://localitebackend.localite.services/getmerchant/${user.username}`)
        .then(response => response.json())
        .then(data => setMerchantData(data))
        .catch(error => console.error('Error fetching merchant data:', error));

      fetch(`https://localitebackend.localite.services/entry-count?username=${user.username}`)
        .then(response => response.json())
        .then(data => setEntryCount(data.count))
        .catch(error => console.error('Error fetching entry count:', error));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert("You must be logged in to submit data.");
      return;
    }
  
    if (entryCount >= 3) {
      alert('You can only submit 3 entries per week.');
      return;
    }

  
    setIsSubmitting(true);  // Disable the button
    setUploadStatus('Data uploading to Localite...');

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('appSection', appSection);
    formData.append('productCategory', merchantData.businessType);
    formData.append('brand', merchantData.businessName);
    if (brandImage) formData.append('brandImage', merchantData.brandLogo);
    formData.append('title', title);
    formData.append('offerHeadline', offerHeadline);
    formData.append('description', description);
    formData.append('excerptDescription', excerptDescription);
    if (photo) formData.append('photo', photo);
    formData.append('videoLink', videoLink);
    if (photo2) formData.append('photo2', photo2);
    if (additionalPhoto1) formData.append('additionalPhoto1', additionalPhoto1);
    if (additionalPhoto2) formData.append('additionalPhoto2', additionalPhoto2);
    formData.append('price', price);
    formData.append('unit', unit);
    formData.append('discountedPrice', discountedPrice);

    try {
      const res = await fetch('https://localitebackend.localite.services/submit', {
        method: 'POST',
        body: formData
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json();
      alert("Data Added");
  
      // EmailJS configuration
      const serviceID = 'service_eq6t0oc';
      const templateID = 'template_kflpvt9';
      const userID = '-5-Vn5AlZtU90aYG4';
  
      const emailParams = {
        brand_name: merchantData.businessName,
        status: "Offer Added"
      };
  
      await emailjs.send(serviceID, templateID, emailParams, userID);
  
      // Reset all input fields after successful submission
      setAppSection('');
      setProductCategory('');
      setBrand('');
      setBrandImage(null);
      setTitle('');
      setOfferHeadline('');
      setDescription('');
      setExcerptDescription('');
      setPhoto(null);
      setPhoto2(null);
      setAdditionalPhoto1(null);
      setAdditionalPhoto2(null);
      setVideoLink('');
      setPrice('');
      setUnit('');
      setDiscountedPrice('');
  
      // Increment entry count
      incrementEntryCount();
      
      setUploadStatus('Data uploaded successfully!');
    } catch (err) {
      console.error('Error submitting form', err);
      alert('Error submitting form. Please try again.');
      setUploadStatus('Error uploading data. Please try again.');
    } finally {
      setIsSubmitting(false);  // Re-enable the button
      setTimeout(() => setUploadStatus(''), 3000);  // Clear the status after 3 seconds
      // Refresh the page after successful submission
    window.location.reload();
    }
  };

  const incrementEntryCount = () => {
    setEntryCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        
        .form {
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 20px;
          font-weight: bold;
        }
          .form-group input{
           margin-top:-30px;
          }

           .form-group select{
           margin-top:-30px;
           }

           .form-group textarea {
           margin-top:-10px;

           }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 80%;
          padding: 8px;
          height: 40px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        
        .form-group textarea {
          height: auto;
          resize: vertical;
        }
        
        .submit-button {
          background-color: #f61717;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 30px;
          width: 40%;
        }
        
        .submit-button:hover {
          background-color: #218838;
        }

        .image-preview {
          margin-top: 10px;
          max-width: 200px;
          max-height: 200px;
          object-fit: cover;
        }

        .form-group input[type="file"] {
          height: auto;
        }


        .offer-type-selector {
  display: flex;
  gap: 10px;
}

.offer-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.offer-button.active {
  background-color: #007bff; /* Blue for active */
  color: white;
}

.offer-button.inactive {
  background-color: #d3d3d3; /* Grey for inactive */
  color: black;
}

.remove-photo-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-photo-button:hover {
  background-color: #d32f2f;
}

/* Add/Remove button */
.add-file-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 15px 0;
  width: fit-content;
  transition: background-color 0.3s, transform 0.2s;
}

.add-file-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

      `}</style>
      <form onSubmit={handleSubmit} className="form" style={{ 
      backgroundImage: "url('/bg3.png')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>
        <h2 className="form-heading" style={{ marginTop: '-40px', textDecoration: 'underline' }}>Post Creation Form <span style={{marginLeft:'20%'}} ><img style={{width:'30px', marginTop:'30px'}} src="Localite_icon.png" alt="" /></span></h2>

        <p>We are going to create the posts for you.</p>
        {/* {user && <p>Logged in as:  {merchantData.businessName}</p>} */}
        {merchantData && (
          <div>
            <p><strong>Business Name:</strong> {merchantData.businessName} ({merchantData.businessType})</p>
            <a href={`https://localitebackend.localite.services/${merchantData.brandLogo}`} target='_blank'>
            <img style={{width:"80px"}} src={`https://localitebackend.localite.services/${merchantData.brandLogo}`} alt="Profile" className="image-preview" />

            </a>
          </div>
        )}

        <h4>You have {3 - entryCount} submissions remaining this week.</h4>



        <div className="form-group">
          <label>App Section <span style={{color:'red'}}>*</span></label>
          <select value={appSection} onChange={(e) => setAppSection(e.target.value)} disabled>
            {/* <option value="">Select...</option> */}
            {/* <option value="marketplace">Marketplace</option> */}
            <option value="offers">Deal Section</option>
            {/* <option value="free">Free</option> */}
          </select>
        </div>

        <div className="form-group">
          <label>Type of Offer</label>
          <div style={{display:'flex', gap:'20px'}}>

      <button
        className={`offer-button ${productCategory === "Product" ? "active" : "inactive"}`}
        onClick={() => handleSelection("Product")}
      >
        Product
      </button>
      <button
        className={`offer-button ${productCategory === "Service" ? "active" : "inactive"}`}
        onClick={() => handleSelection("Service")}
      >
        Service
      </button>
        </div>
    </div>

        {/* <div className="form-group">
          <label>Brand:</label>
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Enter brand name" />
        </div> */}

        {/* <div className="form-group">
          <label>Upload Brand Image:</label>
          <input type="file" onChange={(e) => setBrandImage(e.target.files[0])} />
          {brandImagePreview && <img src={brandImagePreview} alt="Brand Preview" className="image-preview" />}
        </div> */}

        <div className="form-group">
          <label>Name of the {productCategory}<span style={{color:'red'}}>*</span></label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          {/* <p className='belowp'>ex. Elevate Your Wardrobe at Nishly Fashion House. OR 20% Festive Offer!</p> */}
        </div>

        {/* <div className="form-group">
          <label>Offer Headline <span style={{color:'red'}}>*</span></label>
          <input type="text" value={offerHeadline} onChange={(e) => setOfferHeadline(e.target.value)} placeholder="Enter offer headline"/>
          <p className='belowp'>Note: The Content added here will show on the image.</p>
        </div> */}


        {/* <div className="form-group">
          <label>Excerpt Description <span style={{color:'red'}}>*</span></label>
          <textarea value={excerptDescription} onChange={(e) => setExcerptDescription(e.target.value)} placeholder="Enter excerpt description"></textarea>
      
        </div> */}

{/*
ALLL photp

        <div className="form-group">
          <label>Upload Photo <span style={{color:'red'}}>*</span></label>
          <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required/>
          <p className='belowp'>Note: Pre-existing photos of clients/product/service to be added.</p>
           {photoPreview && (
        <div className="image-preview-container">
          <img src={photoPreview} alt="Photo Preview" className="image-preview" />
          <button onClick={handleRemovePhoto} className="remove-photo-button">
            &#10006; 
          </button>
        </div>
      )}
        </div>
        
        <div className="form-group">
          <label>Upload Photo 2 (Optional)
            
          </label>
          <input type="file" onChange={(e) => setPhoto2(e.target.files[0])} />
          {photo2Preview && (
          <div className="image-preview-container">
            <img src={photo2Preview} alt="Photo 2 Preview" className="image-preview" />
            <button onClick={handleRemovePhoto2} className="remove-photo-button">
              &#10006; 
            </button>
          </div>
        )}
        </div>

        <div className="form-group">
          <label>Upload Photo 3 (Optional)</label>
          <input type="file" onChange={(e) => setAdditionalPhoto1(e.target.files[0])} />
          {additionalPhoto1Preview && (
          <div className="image-preview-container">
            <img src={additionalPhoto1Preview} alt="Additional Photo 1 Preview" className="image-preview" />
            <button onClick={handleRemoveAdditionalPhoto1} className="remove-photo-button">
              &#10006; 
            </button>
          </div>
        )}
          </div>
  */}

        {/* <div className="form-group">
  <label>Upload video (Optional)</label>
  <input 
    type="file" 
    accept="video/*" 
    onChange={(e) => setAdditionalPhoto2(e.target.files[0])} 
  />
  <br />
  <br />


  {additionalPhoto2Preview && (
    <video style={{width: "250px"}} controls className="video-preview">
      <source src={additionalPhoto2Preview} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )}
</div> */}
{/* 
        <div className="form-group">
          <label>Paste a Video Link (Optional)</label>
          <input type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} placeholder="Enter video link of the OFFERED product/service" />
        </div> */}

<div>
      {/* First Upload Field */}
      <div className="form-group">
        <label>Upload Photo/Video <span style={{ color: "red" }}>*</span></label>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setPhoto, setPhotoPreview)}
          required
        />
        {/* <p className="belowp">Note: Pre-existing photos of clients/product/service to be added.</p> */}
        {photoPreview && (
          <div className="image-preview-container">
            <img src={photoPreview} alt="Photo Preview" className="image-preview" />
            <button onClick={handleRemovePhoto} className="remove-photo-button">
              &#10006; {/* Cross icon */}
            </button>
          </div>
        )}
      </div>

      <div style={{display:'flex', gap:'5px', width:'80%'}}>

     <div>

      {/* Button to Add Second File Upload Field */}
      <button onClick={handleToggleSecondFile} className="add-file-button">
        {showSecondPhotoField ? "Remove Field" : "Add Another File +"}
      </button>

      {/* Second Upload Field (Visible when "Add Another File" is clicked) */}
      {showSecondPhotoField && (
        <div className="form-group">
          <label>Upload Photo (Optional)</label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setPhoto2, setPhoto2Preview)}
          />
          {photo2Preview && (
            <div className="image-preview-container">
              <img
                src={photo2Preview}
                alt="Photo 2 Preview"
                className="image-preview"
              />
              <button onClick={handleRemovePhoto2} className="remove-photo-button">
                &#10006; {/* Cross icon */}
              </button>
            </div>
          )}
        </div>
      )}

      </div>


      <div>

      {/* Button to Add Third File Upload Field */}
      <button onClick={handleToggleThirdFile} className="add-file-button">
        {showThirdPhotoField ? "Remove Field" : "Add Another File +"}
      </button>

      {/* Third Upload Field (Visible when "Add Another File" is clicked) */}
      {showThirdPhotoField && (
        <div className="form-group">
          <label>Upload Photo (Optional)</label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setAdditionalPhoto1, setAdditionalPhoto1Preview)}
            />
          {additionalPhoto1Preview && (
            <div className="image-preview-container">
              <img
                src={additionalPhoto1Preview}
                alt="Additional Photo 1 Preview"
                className="image-preview"
                />
              <button onClick={handleRemoveAdditionalPhoto1} className="remove-photo-button">
                &#10006; {/* Cross icon */}
              </button>
            </div>
          )}
        </div>

)}
</div>
</div>
    </div>
    <br />








{productCategory === "Product" && (
        <div className="form-group">
          <label>Units</label>
          <input
            type="number"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="Enter only in case of limited PRODUCTS"
          />
        </div>
      )}

        <div className="form-group">
        <label>Actual Price <span style={{ color: 'red' }}>*</span></label>
        <input
          type="number"
          value={mrp}
          onChange={(e) => setMrp(e.target.value)}
          // placeholder={`Enter ${productCategory} actual price`}
          required
        />
      </div>

        <div className="form-group">
          <label>Discount Percentage <span style={{color:'red'}}>*</span></label>
          <input type="number" value={discountedPrice}
           onChange={handleDiscountChange} // Use the validation function here
          //  onChange={(e) => setDiscountedPrice(e.target.value)}
            // placeholder={`Enter discount unit on the ${productCategory}`}
             required/>
        </div>

        <div className="form-group">
        <label>Final Price</label>
        <input
          type="text" // Change input type to text
          value={`₹ ${price.toFixed(2)} /-`} // Display formatted value
          readOnly
          placeholder="Calculated actual price"
          style={{ textAlign: 'left' }} // Optional: Align text to the right
        />
        <p className='belowp'>Note: Discounted offer for the customers.</p>
      </div>

      <div className="form-group">
          <label>Description of the {productCategory} (Optional)</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder={`Enter detailed description of the ${productCategory}`}></textarea>

        </div>
        


<div className='btndivs'>

        <button type="submit" id='submit-button' className="submit-button" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </button>
  <p style={{width:'80%'}}>Note: Our creative team will use the above brand information submitted by you in order to create an attractive post on Localite App.</p>
        <p style={{marginTop:'40px', color:'blue'}} onClick={logout}>Logout</p>
</div>

  {uploadStatus && (
    <div className="popup-message2">
      {uploadStatus}
    </div>
  )}

      </form>
    </>
  );
};
