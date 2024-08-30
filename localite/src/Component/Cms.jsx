import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios'; // Make sure to install axios
import '../styles/Cms.css'; // Import CSS module for styling

export const Cms = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [entryType, setEntryType] = useState('');
  const [directionLink, setDirectionLink] = useState('');
  const [about, setAbout] = useState('');
  const [timing, setTiming] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [data, setData] = useState([]);
  const [filterLocation, setFilterLocation] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const locations = ['Juhu', 'Andheri (W)'];
  const categories = [
    'Parks', 'Religious Places', 'Beaches', 'Ambulance Services', 'Fire Brigade',
    'Police', 'Women & Child Helpline', 'Mental Health Helpline', 'Pre-loved', 'Transportation'
  ];

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setImages(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('location', location);
    formData.append('category', category);
    formData.append('title', title);
    formData.append('entryType', entryType);
    formData.append('directionLink', directionLink);
    formData.append('about', about);
    formData.append('timing', timing);
    formData.append('contactNumber', contactNumber);
    formData.append('website', website);

    images.forEach((file) => {
      formData.append('images', file);
    });

    try {
      await axios.post('https://localitebackend.localite.services/uploadcms', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('CMS data submitted successfully!');
      fetchData(); // Refresh the data table after submission
      
      // Clear form fields after successful submission
      setLocation('');
      setCategory('');
      setImages([]);
      setTitle('');
      setEntryType('');
      setDirectionLink('');
      setAbout('');
      setTiming('');
      setContactNumber('');
      setWebsite('');
    } catch (error) {
      console.error('Error submitting CMS data:', error);
      alert('Failed to submit CMS data.');
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localitebackend.localite.services/getcms');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching CMS data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localitebackend.localite.services/deletecms/${id}`);
      alert('Data deleted successfully!');
      fetchData(); // Refresh the data table after deletion
    } catch (error) {
      console.error('Error deleting CMS data:', error);
      alert('Failed to delete CMS data.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cms-container">
      <h1>CMS (App Places)</h1>
      <form onSubmit={handleSubmit} className="cms-form">
        {/* Form Fields */}
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="images">Images:</label>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <div className="image-previews">
            {images.map((file, index) => (
              <div key={index} className="image-preview">
                <img src={file.preview} alt="Preview" />
                <button type="button" onClick={() => handleRemoveImage(index)}>Remove</button>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="title">Title of Place:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="entryType">Entry Type:</label>
          <select
            id="entryType"
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
            required
          >
            <option value="">Select Entry Type</option>
            <option value="Paid">Paid</option>
            <option value="Free">Free</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="directionLink">Get Directions Link:</label>
          <input
            id="directionLink"
            type="url"
            value={directionLink}
            onChange={(e) => setDirectionLink(e.target.value)}
            placeholder="https://www.google.com/maps"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="about">About the Place:</label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timing">Timing:</label>
          <input
            id="timing"
            type="text"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            id="contactNumber"
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="website">Website:</label>
          <input
            id="website"
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <h2>All Places Table</h2>
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="filterLocation">Filter Location:</label>
          <select
            id="filterLocation"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filterCategory">Filter Category:</label>
          <select
            id="filterCategory"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Category</th>
            <th>Images</th>
            <th>Title</th>
            <th>Entry Type</th>
            <th>Directions Link</th>
            {/* <th>About</th>
            <th>Timing</th>
            <th>Contact Number</th>
            <th>Website</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(item => 
              (!filterLocation || item.location === filterLocation) &&
              (!filterCategory || item.category === filterCategory)
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.location}</td>
                <td>{item.category}</td>
                <td>
                  {item.images && item.images.map((img, index) => (
                      <img
                      width='50px'
                      height='50px'
                        key={index}
                        src={`https://localitebackend.localite.services/${img}`}
                        alt="Thumbnail"
                        className="image-thumbnail"
                      />
                  ))}
                </td>
                <td>{item.title}</td>
                <td>{item.entryType}</td>
                <td><a href={item.directionLink} target="_blank" rel="noopener noreferrer">Directions</a></td>
                {/* <td>{item.about}</td>
                <td>{item.timing}</td>
                <td>{item.contactNumber}</td>
                <td><a href={item.website} target="_blank" rel="noopener noreferrer">Website</a></td> */}
                <td>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
