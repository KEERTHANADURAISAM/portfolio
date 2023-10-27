import React, { useState } from "react";
import "./Project.css";
import img1 from './img/queries.png'
import img2 from './img/treadmill.png'
import img3 from './img/sunglasses.png'
import img4 from './img/chat.png'


const Project = ({ pageRefs }) => {
  
  return (
    <main
      className="project-main-container"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, project: el })}
    >
      
        <div className="project-div">
          <h1 className="project-header">Projects</h1>
        </div>
        <section className="project-grid">
          
            <div  className="project-card">
              <label className="project-head">ZenTicket Resolve</label>
              <img src={img1} className="pro-img" />
              <a
                href="https://github.com/KEERTHANADURAISAM/CapstoneZenTicketBooking"
                target="_blank"
                className="pro-source"
              >
                Front-End Url
              </a>
              <a href="https://elegant-beijinho-0a563b.netlify.app/" target="_blank" className="pro-live">
                Live-Site
              </a>
              <a href="https://github.com/KEERTHANADURAISAM/zen-server" target="_blank" className="pro-source">
                Back-End Url
              </a>
            </div>
            {/* 2 */}
            <div  className="project-card">
              <label className="project-head">Fit-Fiber Store</label>
              <img src={img2} className="pro-img" />
              <a
                href="https://github.com/KEERTHANADURAISAM/WebcodeTwo-EquipmentRental-App"
                target="_blank"
                className="pro-source"
              >
                Front-End Url
              </a>
              <a href="https://aquamarine-centaur-72eaee.netlify.app/" target="_blank" className="pro-live">
                Live-Site
              </a>
              <a href="https://github.com/KEERTHANADURAISAM/EquipmentServer" target="_blank" className="pro-source">
                Back-End Url
              </a>
            </div>
{/* 3 */}
<div  className="project-card">
              <label className="project-head">Fit-Fiber Store</label>
              <img src={img4} className="pro-img" />
              <a
                href="https://github.com/KEERTHANADURAISAM/chat-app-mern"
                target="_blank"
                className="pro-source"
              >
                Front-End Url
              </a>
              <a href="https://stupendous-dusk-6275ff.netlify.app/" target="_blank" className="pro-live">
                Live-Site
              </a>
              <a href="https://github.com/KEERTHANADURAISAM/chat-app-server" target="_blank" className="pro-source">
                Back-End Url
              </a>
            </div>


            {/* 3 */}
            <div  className="project-card">
              <label className="project-head">Harini Opticals</label>
              <img src={img3} className="pro-img" />
              <a
                href="https://github.com/KEERTHANADURAISAM/React-project-RSOP-Opticals"
                target="_blank"
                className="pro-source"
              >
                Front-End Url
              </a>
              <a href="https://flourishing-melba-92e729.netlify.app/"  target="_blank" className="pro-live-site">
                Live-Site
              </a>
              
            </div>
          
        </section>
      
    </main>
  );
};

export default Project;
