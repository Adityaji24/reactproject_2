import React, { useState } from 'react';

const ColourContext = () => {
  // Declare a state variable for the background color and input value
  const [bgColor, setBgColor] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Function to change the background color when the button is clicked
  const changeBackground = () => {
    setBgColor(inputValue);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
      <h1>Change Background Color</h1>
      Enter any Colour: 
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={changeBackground}>Change Colour</button>
    </div>
  );
};

export default ColourContext;
