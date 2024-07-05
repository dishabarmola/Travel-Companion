// src/About.js

import React from 'react';
import './Contacts.css'; 

const Contact = () => {
  return (
    <div >
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to contact us:</p>
      <input type="text" className="contact-input" placeholder="Name" />
      <input type="email" className="contact-input" placeholder="Email" />
      <textarea className="contact-input" placeholder="Message" rows="5" />
      <button className="contact-button">Submit</button>
    </div>
  );
};

export default Contact;



    