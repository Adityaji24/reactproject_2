// src/pages/About.jsx

import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Make My Event</strong>, an innovative event booking platform founded by 
        <strong> Aditya Tanwani</strong> in 2024. Our mission is to revolutionize the way you organize 
        and attend events, making the entire process seamless, accessible, and enjoyable for everyone.
      </p>
      <p>
        At <strong>Make My Event</strong>, we know that planning an event can be overwhelming. 
        Whether you're hosting a concert, a conference, or a special gathering, we equip you with 
        the essential tools to create unforgettable experiences that leave lasting memories.
      </p>
      <p>
        Our user-friendly platform enables you to effortlessly book events, select your preferred 
        ticket types, and manage all your bookings in one place. We prioritize your satisfaction 
        and are committed to providing exceptional service at every step of your event journey.
      </p>
      <p>
        Join us in transforming the event booking experience. Let us help you make your next event 
        truly unforgettable!
      </p>
      <p>
        For any inquiries or support, please feel free to <a href="/contact">contact us</a>.
      </p>
    </div>
  );
};

export default About;
