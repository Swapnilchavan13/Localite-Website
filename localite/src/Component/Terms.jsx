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
      <p>Welcome to Localite! Please read these Terms and Conditions carefully before using our services.</p>

      {/* Terms Content */}
      <div style={styles.content}>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the Localite website and app, you agree to be bound by these terms and conditions, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

        <h2>2. Use of License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Localite's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
        <ul style={styles.list}>
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on Localite's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Localite at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

        <h2>3. Disclaimer</h2>
        <p>The materials on Localite's website are provided on an 'as is' basis. Localite makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <p>Further, Localite does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

        <h2>4. Limitations</h2>
        <p>In no event shall Localite or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Localite's website, even if Localite or a Localite authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

        <h2>5. Accuracy of Materials</h2>
        <p>The materials appearing on Localite's website could include technical, typographical, or photographic errors. Localite does not warrant that any of the materials on its website are accurate, complete, or current. Localite may make changes to the materials contained on its website at any time without notice. However, Localite does not make any commitment to update the materials.</p>

        <h2>6. Links</h2>
        <p>Localite has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Localite of the site. Use of any such linked website is at the user's own risk.</p>

        <h2>7. Modifications</h2>
        <p>Localite may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then-current version of these terms of service.</p>

        <h2>8. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of the country and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
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
