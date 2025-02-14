import React, { useState, useCallback, useMemo } from 'react';
import QABox from './QABox';

const ExpensiveChild = React.memo(({ compute, onButtonClick }) => {
  console.log('ExpensiveChild rendered');
  return (
    <div className="box">
      <p>Expensive Computation Result: {compute}</p>
      <button className="button is-small is-success" onClick={onButtonClick}>
        Child Button
      </button>
    </div>
  );
});

const PerformanceDemo = () => {
  const [count, setCount] = useState(0);
  const [childCounter, setChildCounter] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('Running expensive calculation...');
    let sum = 0;
    for (let i = 0; i < 1e7; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  const handleChildButtonClick = useCallback(() => {
    setChildCounter((prev) => prev + 1);
  }, []);

  return (
    <div className="content">
      <QABox
        question="How can you prevent unnecessary re-renders in React components?"
        answer="To prevent unnecessary re-renders, you can use React.memo, useCallback, and useMemo to memoize components, functions, and computed values, and implement shouldComponentUpdate in class components."
      />
      <h2 className="title">Performance Optimization Demo</h2>
      <button className="button is-primary" onClick={() => setCount((prev) => prev + 1)}>
        Increment Count ({count})
      </button>
      <p></p>
      <p>
        The expensive calculation is memoized and only recalculates when the count changes.
      </p>
      <ExpensiveChild compute={expensiveCalculation} onButtonClick={handleChildButtonClick} />
      <p>Child button clicked {childCounter} times.</p>
    </div>
  );
};

export default PerformanceDemo;