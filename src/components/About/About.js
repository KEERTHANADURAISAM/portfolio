import React from "react";
import "./About.css";
import me from "./lady avatar.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

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
      <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
           className="about-img-div">
        <img src={me} className="about-img" />
       
        </motion.div>
    </div>
  );
};

export default About;
