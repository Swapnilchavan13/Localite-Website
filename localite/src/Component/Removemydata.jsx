import React from 'react';

// Inline styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  h1: {
    fontSize: '1.75rem',
    color: '#333',
    marginBottom: '1rem',
  },
  p: {
    marginBottom: '1rem',
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldset: {
    border: 'none',
    padding: '0',
    marginBottom: '1rem',
  },
  legend: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  radioLabel: {
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  radioInput: {
    marginRight: '0.5rem',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  selectInput: {
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  textInput: {
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  '@media (max-width: 600px)': {
    container: {
      padding: '10px',
    },
    h1: {
      fontSize: '1.5rem',
    },
    selectInput: {
      fontSize: '1rem',
    },
    textInput: {
      fontSize: '1rem',
    },
    button: {
      fontSize: '0.875rem',
    },
  },
};

// List of top 15 countries including India
const countries = [
  'United States',
  'India',
  'China',
  'Japan',
  'Germany',
  'United Kingdom',
  'France',
  'Brazil',
  'Italy',
  'Canada',
  'South Korea',
  'Australia',
  'Mexico',
  'Russia',
  'Saudi Arabia',
];

export const Removemydata = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Request Personal Content Removal</h1>
      <p style={styles.p}>
        Our local content policies apply based on local laws and regulations. To request removal or restriction of content for legal reasons—including copyright infringement, trademark violations, or a court order—please create a request through our Legal Help Center.
      </p>
      <p style={styles.p}>
        You may need to report the same content through both legal and content policy reporting channels, but each report must be filed separately. Reporting through a content policy channel does not substitute for legal reporting and does not serve as legal notice.
      </p>
      <form style={styles.form}>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Why are you requesting personal content removal? *</legend>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="reason" value="nudity" style={styles.radioInput} required />
              Content contains nudity or sexual material
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="reason" value="personal-info" style={styles.radioInput} required />
              Content contains your personal information
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="reason" value="exploitative" style={styles.radioInput} required />
              Content is on a site with exploitative removal practices
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="reason" value="minor" style={styles.radioInput} required />
              Content shows a person under 18
            </label>
          </div>
        </fieldset>

        <label htmlFor="country" style={styles.label}>Your country of residence</label>
        <select id="country" name="country" style={styles.selectInput} required>
          <option value="">Select your country</option>
          {countries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <label htmlFor="additional-info" style={styles.label}>Additional Information</label>
        <input type="text" id="additional-info" name="additional-info" style={styles.textInput} />

        <p style={styles.p}>
          Some account and system information may be collected during this process. This information will be used to improve support and address technical issues, in accordance with our Privacy Policy and Terms of Service. Translation services may be used during support interactions.
        </p>

        <button 
          type="submit" 
          style={styles.button} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} 
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};
