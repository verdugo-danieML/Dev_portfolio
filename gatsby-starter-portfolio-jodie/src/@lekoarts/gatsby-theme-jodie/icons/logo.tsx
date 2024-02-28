
import * as React from "react"
import logoImage from "./logo1.png";
import "./Logo.css"; // Create a separate CSS file for styling


const Logo = () => (
  
  <div className="logo-container">
    <img src={logoImage} alt="Logo" className="logo-image" />
  </div>
  
)

export default Logo
