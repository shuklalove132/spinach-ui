import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="FooterContainer">
      <ul className="FooterContainerUpper">
        <li className="footerSocials">Linkedin</li>
        <li className="footerSocials">Instagram</li>
        <li className="footerSocials">Dribble</li>
        <li className="footerSocials">Behance</li>
        <li className="footerSocials">Twitter</li>
      </ul>
      <div className="FooterContainerLower">
        <div className="FooterContainerLowerLeft">
          <div className="FooterContainerLowerLeftCorner">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Navbar%2FLogoGroup.png?alt=media&token=c5a69a8a-879c-431d-a8b2-767d3001e679"
              className="FooterLogo"
            />
            <p className="comapnyAddress">
              7th floor, Corporate Park ||, Sion-Trombay Road, Chembur, Mumbai-
              400071 , India.
            </p>
            <p className="comapnyAddress">Mumbai-400071,India</p>

            <p className="comapnyAddress">View on Google Maps</p>
          </div>
          <div className="FooterContainerLowerCenter">
            <div className="FooterContainerLowerCenterLeft">
              <p className="footerItems">The Company</p>
              <p className="footerItems">Our Services</p>
              <p className="footerItems">Our Expertise</p>
              <p className="footerItems">Client Work</p>
            </div>

            <div className="FooterContainerLowerCenterRight">
              <p className="footerItems">Careers</p>
              <p className="footerItems">Privacy Policy</p>
              <p className="footerItems">Our Expertise</p>
              <p className="footerItems">Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className="FooterContainerLowerRight">
          <p className="footerItems">Business enquiries:</p>
          <p className="footerItems">eshani@spinachexperience.design</p>
        <p className="footerItems">+91 9821297209</p>
        <p className="footerItems">Career enquiries:</p>
        <p className="footerItems">fedora@spinachexperience.design</p>
        <p className="footerItems">+91 8097260369</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
