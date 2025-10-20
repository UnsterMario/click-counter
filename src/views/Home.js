import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <button onClick={onIncrement}>
        Vous avez cliqué {counter} fois
      </button>
      <button onClick={onDecrement} disabled={counter <= 0} aria-label="decrement">-</button>
    </div>
  );
};

export default Home;
