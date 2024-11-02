// EventDisplayPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import concertImage from './images/concert.jpg'; // Update the path as necessary
import artExhibitionImage from './images/art.jpg'; // Update the path as necessary
import techConferenceImage from './images/tech.jpg'; // Update the path as necessary
import foodFest from "./images/food.jpg"
import standUp from "./images/standup.jpeg"
import { notification } from 'antd'; // Import notification from Ant Design

const eventsData = [
  {
    id: 1,
    name: "Annual Music Concert",
    description: "Live music concert",
    date: "2024-11-05",
    place: "New Delhi",
    imageUrl: concertImage,
  },
  {
    id: 2,
    name: "Art Exhibition",
    description: "Modern art gallery",
    date: "2024-11-07",
    place: "Mumbai",
    imageUrl: artExhibitionImage,
  },
  {
    id: 3,
    name: "Tech Conference",
    description: "Tech talks and workshops",
    date: "2024-11-30",
    place: "Bangalore",
    imageUrl: techConferenceImage,
  },
  {
    id: 4,
    name: "Food festival",
    description: "Lucknowi Food Festival",
    date: "2024-11-17",
    place: "Bhopal",
    imageUrl: foodFest,
  },
  {
    id: 5,
    name: "Stand Up Comedy",
    description: "By Anubhav Singh Bassi",
    date: "2024-12-19",
    place: "Noida",
    imageUrl: standUp,
  },
  
  
];

const ticketPrices = [
  { label: "Gold - 5000", value: "gold" },
  { label: "Platinum - 15000", value: "platinum" },
  { label: "Silver - 8000", value: "silver" },
];

const timeSlots = [
  { label: "Morning (10 AM - 12 PM)", value: "morning" },
  { label: "Afternoon (2 PM - 4 PM)", value: "afternoon" },
  { label: "Evening (6 PM - 8 PM)", value: "evening" },
];

const EventDisplayPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticketType, setTicketType] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const handleBookNowClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm)
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create booking data
    const bookingData = {
      eventName: selectedEvent.name,
      ticketType,
      timeSlot,
      name,
      email,
      phone,
    };

    // Show success notification
    notification.success({
      message: 'Booking Submitted',
      description: `Your ticket for "${selectedEvent.name}" has been booked successfully!`,
      placement: 'topRight',
    });

    // Navigate to Payment Page with booking data
    navigate('/display', { state: { bookingData: JSON.stringify(bookingData) } });

    // Close modal after submission
    setModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Find and Book Events</h1>
      <input
        type="text"
        placeholder="Search events..."
        onChange={handleSearch}
        style={styles.searchBar}
      />
      <div style={styles.cardContainer}>
        {filteredEvents.map(event => (
          <div key={event.id} style={styles.card}>
            <img src={event.imageUrl} alt={event.name} style={styles.image} />
            <h3 style={styles.cardTitle}>{event.name}</h3>
            <p style={styles.cardText}>{event.description}</p>
            <p style={styles.cardText}><strong>Date:</strong> {event.date}</p>
            <p style={styles.cardText}><strong>Location:</strong> {event.place}</p>
            <button style={styles.button} onClick={() => handleBookNowClick(event)}>Book Now</button>
          </div>
        ))}
      </div>
      
      {/* Booking Modal */}
      {isModalOpen && selectedEvent && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Booking Form for {selectedEvent.name}</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  style={styles.inputField} 
                />
              </label>
              <label>
                Email:
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  style={styles.inputField} 
                />
              </label>
              <label>
                Phone:
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                  style={styles.inputField} 
                />
              </label>
              <label>
                Ticket Type:
                <select
                  value={ticketType}
                  onChange={(e) => setTicketType(e.target.value)}
                  required
                  style={styles.selectField}
                >
                  <option value="" disabled>Select Ticket Type</option>
                  {ticketPrices.map((ticket, index) => (
                    <option key={index} value={ticket.value}>{ticket.label}</option>
                  ))}
                </select>
              </label>
              <label>
                Time Slot:
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  required
                  style={styles.selectField}
                >
                  <option value="" disabled>Select Time Slot</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot.value}>{slot.label}</option>
                  ))}
                </select>
              </label>
              <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
            <button onClick={() => setModalOpen(false)} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  searchBar: {
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column", // Arrange cards in a column
    alignItems: "center",
    gap: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "500px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "16px",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "8px",
  },
  cardText: {
    fontSize: "14px",
    marginBottom: "8px",
    color: "#555",
  },
  button: {
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "left",
    width: "400px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  selectField: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  closeButton: {
    marginTop: "10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default EventDisplayPage;
