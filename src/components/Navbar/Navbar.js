import React from "react";
import "./Navbar.css";
import logo from "./logo.jpg";


const Navbar = ({pageRefs}) => {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="main-container">
      <nav className="nav-bar">
        <img src={logo} className="logo" />
        <ul className="nav-ul">
          
        <label onClick={() => scrollIntoView("home")}>Home</label>
        <label onClick={() => scrollIntoView("about")}>About</label>     
        <label onClick={() => scrollIntoView("skills")}> Skills</label>
        <label onClick={() => scrollIntoView("project")}>Project</label>
        <label onClick={() => scrollIntoView("contact")}>Contact Us</label>
          
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
