import React from 'react'
import './Contact.css';
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-div'>
        <h1>Contact <span>Me</span></h1>
      </div>
      <div className='input-fields'>
      <label className='contact-lable'>Name</label>
      <input placeholder='' className='contact-input' required/><br></br>
      <label className='contact-lable'>Email</label>
      <input type='email' className='contact-input' required/><br></br>
      <label className='contact-lable'>Message</label>
      <TextArea rows={4} maxLength={100} className='contact-textarea'/>
      <button className='contact-btn'>Send</button>
      <span className='foo-span'>©Keerthana.All right reserved</span>
        </div>
      
         
        </div>
       
  )
}

export default Contact