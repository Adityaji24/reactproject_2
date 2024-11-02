// DisplayPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayPage = () => {
  const location = useLocation();
  const bookingData = location.state ? JSON.parse(location.state.bookingData) : null;

  if (!bookingData) {
    return <p>No booking data available.</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Booking Details</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Event Name</th>
            <th style={styles.th}>Ticket Type</th>
            <th style={styles.th}>Time Slot</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>{bookingData.eventName}</td>
            <td style={styles.td}>{bookingData.ticketType}</td>
            <td style={styles.td}>{bookingData.timeSlot}</td>
            <td style={styles.td}>{bookingData.name}</td>
            <td style={styles.td}>{bookingData.email}</td>
            <td style={styles.td}>{bookingData.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    borderCollapse: 'collapse',
    border: '1px solid #ddd', // Table border
  },
  th: {
    border: '1px solid #ddd',
    padding: '12px 8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  td: {
    border: '1px solid #ddd',
    padding: '12px 8px',
    textAlign: 'left',
  },
};

export default DisplayPage;
