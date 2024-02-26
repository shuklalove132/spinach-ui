import React from "react";
import "./Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="navBarContainer">
      <div className="leftLogoGroup">
        <div className="leftLogoGroupHamburgerDiv">
          <img
            className="leftLogoGroupHamburger"
            src="https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Navbar%2FHamburger.png?alt=media&token=3c99d599-d048-470a-85bd-b8e2e1ac9cd7"
            alt="hamburger menu"
          />
        </div>
        <div className="leftLogoGroupLogoImageDiv">
          <img
            className="leftLogoGroupLogoImage"
            src="https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Navbar%2FLogoGroup.png?alt=media&token=c5a69a8a-879c-431d-a8b2-767d3001e679"
            alt="Logo Group"
          />
          <img
          className="leftLogoGroupOnlyLogoImage"
          src="https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Navbar%2FLOGO.png?alt=media&token=c2472fc5-40bc-4f53-9b0e-b5ce75727941"
          alt="Logo Group"
        />
        </div>
      </div>
      <div className="centerOptionsNavbar">
        <section className="navbarMenuItemDiv">
          <p className="navBarMenuItem">The Company</p>
        </section>
        <section className="navbarMenuItemDivFocused">
          {" "}
          <p className="navBarMenuItemFocused">The Company</p>
          <IoMdArrowDropdown className="navbarMenuItemDropdownIcon" />
        </section>
        <section className="navbarMenuItemDiv">
          {" "}
          <p className="navBarMenuItem">Our Expertise</p>
        </section>
        <section className="navbarMenuItemDiv">
          {" "}
          <p className="navBarMenuItem">Client Work</p>
        </section>
      </div>
 
   <button className="rightNavbarButton" >Engage Us</button>

    </div>
  );
};

export default Navbar;
