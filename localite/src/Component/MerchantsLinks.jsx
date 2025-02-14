import React from "react";

export const MerchantsLinks = () => {
  const links = [
    { name: "All Merchant Data", url: "https://allmerchantdata.netlify.app/" },
    { name: "All Onboarded Data", url: "https://onboardeddata.netlify.app/" },
    { name: "Onboarded Data with Details", url: "https://onboardeddatawithdetails.netlify.app/" },
    { name: "All Content Data", url: "https://allcontentdata.netlify.app/" },
    { name: "Login to Form", url: "https://fieldteam.localite.services/login" },
    { name: "Add Content by Team", url: "https://fieldteam.localite.services/merchantcontentbyteam" }
  ];

  const containerStyle = {
    padding: "30px",
    maxWidth: "500px",
    margin: "40px auto",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#0056b3",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "500",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginBottom: "12px",
    transition: "all 0.3s ease-in-out",
    display: "block",
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#003d80";
    e.target.style.transform = "scale(1.05)";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#0056b3";
    e.target.style.transform = "scale(1)";
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Merchants Links</h2>
      <div>
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => window.open(link.url, "_blank")}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
};
