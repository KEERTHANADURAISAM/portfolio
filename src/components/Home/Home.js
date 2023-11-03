import React from "react";
import "./Home.css";
import git from "./monochrome_large.png";
import women from "./women.png";
import linkedin from "./355994.png";


const Home = ({pageRefs}) => {
  return (
    <div className="home-grid-container" id="home"
     ref={el => (pageRefs.current = { ...pageRefs.current, home: el })}>
      <div className="home-container">
        <div className="home-content">
          <h1 className="header-h1">Hi</h1>
          <h3 className="header-h3">
            
            <span className="header-h3-span"> I'm </span>KEERTHANA
          </h3>
          <h2 className="header-h2">Full Stack Developer</h2>
        </div>
        <div className="home-imgs">
         <a href="https://github.com/KEERTHANADURAISAM" target="_blank"><img src={git} className="git-img" /></a> 
         <a href="https://www.linkedin.com/in/keerthana-durai-b67a40253/" target="_blank"> <img src={linkedin} className="link-img" /></a>
         <a href="https://drive.google.com/file/d/1NzOogVzEhh8iFg57KmIEMNkx_Cr3_S4q/view?usp=drive_link" target="_blank"> <button className="home-btn-resume">Resume</button></a>
        </div>
      </div>
      <div className="home-user-img">
        <img src={women} className="img-home"></img>
      </div>
    </div>
  );
};

export default Home;
