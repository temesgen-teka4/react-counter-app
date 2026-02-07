import React, { useEffect, useState } from 'react';
import './App.css';

function DisplayMessage({ count }) {
  if (count >= 10) {
    return <p className="warning">You reached max value!</p>;
  }
  return null;
}

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="main">
      <h1 className="head">Counting Checklist</h1>
      <DisplayMessage count={count} />

      <div className="btn">
        
        <button
          className="btn-increment"
          onClick={() => {
            if (count < 10) {
              setCount(prev => prev + 1);
            }
          }}
        >
          Increase
        </button>

        <p className="Pcount">{count}</p>

        <button
          className="btn-decrement"
          onClick={() => {
            if (count > 0) {
              setCount(prev => prev - 1);
            }
          }}
        >
          Decrease
        </button>

        <button className="btn-reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
