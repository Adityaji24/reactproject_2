// src/components/EventCard.js

import React from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}></div>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      
      <button>Book Now</button>
    </div>
  );
};

export default EventCard;
