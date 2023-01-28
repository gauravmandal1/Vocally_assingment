import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    style={{
      backgroundColor: "transparent",
      borderRadius: "45px",
      border: "2px solid gray",
      padding: "20px",
      textAlign: "center",
      fontSize: "18px",
      
      textColor:"white"
    }}
  >
    <h2 style={{color:"white"}}>Download the mobile app</h2>
  </button>
);

export default Button;

