import React from "react";
import "./About.css";
import me from "./lady avatar.png";
const About = ({pageRefs}) => {
  return (
    <div className="about-container-grid" ref={el=>pageRefs.current={...pageRefs.current,about:el}}>
      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1>
        </div>
        <div className="about-text">
          <h3>
            Hi, I'm a Qualified Full Stack Developer familiar with a wide
            range of programming utilities and languages. Knowledgeable of
            backend and frontend development requirements with database
            management. Handles any part of the process with ease. Collaborative
            team player with a willingness to learn in and grow with the
            organization.
          </h3>
        </div>
      </div>
      <div className="about-img-div">
        <img src={me} className="about-img" />
        {/* <img src='https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif'/> */}
      </div>
    </div>
  );
};

export default About;
