import React, { useState } from 'react';
import { TfiInstagram } from "react-icons/tfi";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, we build the mailto URL for the form submission
    const { name, email, message } = formData;
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:surajpatil15624@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink; // Opens the default email client with the pre-filled information
  };

  return (
    <>
      <div className="container contact my-3" data-aos="flip-down" data-aos-anchor-placement="bottom-bottom" id="contact">
        <h1>CONTACT</h1>
        <div className="contact-icon">
          <a href="https://www.instagram.com/patil_suraj__0061/profilecard/?igsh=MXJzajZyYXN5Zjk5bA==" target='_blank' className="itms-pp">
            <TfiInstagram />
          </a>
          {/* <a href="https://www.google.com" target='_blank' className="itms-pp">
            <FaSquareFacebook className='icon' />
          </a> */}
          <a href="https://www.linkedin.com/in/suraj-patil-a54965281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="itms-pp">
            <BsLinkedin className='icon' />
          </a>
          <a href="https://github.com/SURYABHAI061" target='_blank' className="itms-pp">
            <BsGithub className='icon' />
          </a>
          <a href="mailto:surajpatil15624@gmail.com" target='_blank' className="itms-pp">
            <IoIosMail className='icon' />
          </a>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
