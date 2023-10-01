import React, { useState } from 'react';

import "./counter.css"

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-box">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button className='decrement-button' onClick={decrementCount}>Decrement</button>
      <button className='increment-button' onClick={incrementCount}>Increment</button>
      <button className="reset-button" onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;


