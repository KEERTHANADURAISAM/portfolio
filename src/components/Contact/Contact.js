import React, { useState } from "react";
import "./Contact.css";
import TextArea from "antd/es/input/TextArea";
import emailjs from "@emailjs/browser";

const Contact = ({pageRefs}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_08xamoh";
    const templateId = "template_dihgyrv";
    const publicKey = "Cy4bJnADDYybIP7QK";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Portfolio Mail",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="emailForm" ref={el => (pageRefs.current = { ...pageRefs.current, contact: el })}>
      <div className="contact-container">
        <div className="contact-div">
          <h1>
            Contact <span>Me</span>
          </h1>
        </div>
        <div className="input-fields">
          <label className="contact-lable">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-input"
            required
          />
          <br></br>
          <label className="contact-lable">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-input"
            required
          />
          <br></br>
          <label className="contact-lable">Message</label>
          <TextArea
            rows={3}
            maxLength={100}
            className="contact-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="contact-btn">
            Send 
          </button>
          <span className="foo-span">©Keerthana.All right reserved</span>
        </div>
      </div>
    </form>
  );
};

export default Contact;
