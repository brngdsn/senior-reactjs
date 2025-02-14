import React, { useState, useEffect, useMemo, useCallback } from 'react';
import QABox from './QABox';

const factorial = (n) => {
  console.log('Calculating factorial...');
  return n <= 0 ? 1 : n * factorial(n - 1);
};

const HooksDemo = () => {
  const [number, setNumber] = useState(5);
  const [toggle, setToggle] = useState(true);

  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  const handleNumberChange = useCallback((e) => {
    setNumber(parseInt(e.target.value, 10) || 0);
  }, []);

  useEffect(() => {
    console.log('HooksDemo mounted or updated');
    return () => {
      console.log('HooksDemo cleanup on unmount or dependency change');
    };
  }, [number, toggle]);

  return (
    <div className="content">
      <QABox
        question="What are React Hooks and how do they change component design?"
        answer="React Hooks, introduced in React 16.8, allow you to use state and lifecycle methods in functional components. They help reduce boilerplate and promote reusable logic without the need for class components."
      />
      <h2 className="title">Hooks Demo</h2>
      <div className="field">
        <label className="label">Enter a number:</label>
        <div className="control">
          <input
            className="input"
            type="number"
            value={number}
            onChange={handleNumberChange}
          />
        </div>
      </div>
      <p>
        Factorial of {number} is: {memoizedFactorial}
      </p>
      <button className="button is-info" onClick={() => setToggle((prev) => !prev)}>
        Toggle State (observe useEffect cleanup)
      </button>
    </div>
  );
};

export default HooksDemo;