import React from 'react';
import './ContactUs.css';

export default function ContactUs(){
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Our Contact Us</h2>
        <h3>Easy to Contact Us</h3>
        <p>
          We are always ready to help by providing the best service for you. <br></br>We believe
          a good place to live can make your life better.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>Calling</h2>
            <h3>0000111122</h3>
            <button>Call now</button>
          </div>
          <div className="contact-card">
            <h2>Texting</h2>
            <h3>0000666622</h3>
            <button>Chat now</button>
          </div>
          <div className="contact-card">
            <h2>Video Call</h2>
            <h3>0101010101</h3>
            <button>Video Call now</button>
          </div>
          <div className="contact-card">
            <h2>Message</h2>
            <h3>0120120121</h3>
            <button>Message now</button>
          </div>
        </div>
      </div>

      <div className="contact-image">
        <img src="/Contact/c1.png" alt="Contact Us" />
      </div>
    </div>
  );
}
