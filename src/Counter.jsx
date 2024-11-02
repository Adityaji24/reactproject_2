import React, { useState } from 'react';

const Counter = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <>
      <h1>My Counter App</h1>
      <button onClick={() => setCnt(cnt + 1)}>Increment</button>
      <h3>{cnt}</h3>
      <button onClick={() => setCnt(cnt - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
