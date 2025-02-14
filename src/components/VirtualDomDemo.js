import React, { useState, useEffect } from 'react';
import QABox from './QABox';

const VirtualDomDemo = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('VirtualDomDemo re-rendered due to state change');
  });

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="content">
      <QABox
        question="Explain React's Virtual DOM and how it improves performance."
        answer="The Virtual DOM is a lightweight, in-memory representation of the real DOM. When state changes occur, React updates the Virtual DOM first, calculates the differences (diffing), and then applies only the necessary changes to the actual DOM. This minimizes expensive DOM operations and results in more efficient and smoother UI updates."
      />
      <h2 className="title">Virtual DOM Demo</h2>
      <p>
        This demo illustrates how React batches and diffs updates via the Virtual DOM before applying changes to the actual DOM.
      </p>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-primary" onClick={increment}>
            Increment Counter
          </button>
        </div>
        <div className="control">
          <button
            className="button is-light"
            onClick={() => setCounter(0)}
          >
            Reset
          </button>
        </div>
      </div>
      <p>
        <strong>Counter:</strong> {counter}
      </p>
      <ul>
        {[...Array(5)].map((_, index) => (
          <li key={index}>List item {index + 1}</li>
        ))}
      </ul>
      <p>
        Open the browser console to observe log messages simulating React’s efficient diffing algorithm.
      </p>
    </div>
  );
};

export default VirtualDomDemo;