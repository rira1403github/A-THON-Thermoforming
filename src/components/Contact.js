//Google Form Link
//https://docs.google.com/spreadsheets/d/1OKjLiObUJcmFIM4tHzTJ7SNzMVUmvlBBnMkykogO-7A/edit?gid=0#gid=0

import React, { useEffect } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      'https://script.google.com/macros/s/AKfycbxDSzW3-CQlBA3e0S125neWODUaZB_TCgrixQafpHDoZqp-hs03BB68o6xJSygIcj8v/exec'; 

    const formData = new URLSearchParams();
    formData.append('Name', e.target.name.value);
    formData.append('Email', e.target.email.value);
    formData.append('Subject', e.target.subject.value);
    formData.append('Message', e.target.message.value);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data); 
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-map" data-aos="fade-right">
          <iframe
            title="Bangarapet Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.2652836374475!2d78.1785028748521!3d12.993426987320437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad5d224bd36b6d%3A0x6be2862e2742543!2sBangarapet%2C%20Karnataka%20563114!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form-container" data-aos="fade-left">
          <h2>CONTACT</h2>
          <h3>FOR INQUIRIES</h3>
          <p>
            For any inquiries, questions or commendations, please email or fill out the following form.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">ENTER YOUR NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />

            <label htmlFor="email">ENTER YOUR EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <label htmlFor="subject">ENTER YOUR SUBJECT</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />

            <label htmlFor="message">ENTER YOUR MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
