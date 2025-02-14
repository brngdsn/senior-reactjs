import React, { useState } from 'react';
import QABox from './QABox';

const BuggyComponent = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('BuggyComponent crashed!');
  }

  return (
    <div className="content">
      <QABox
        question="What are Error Boundaries in React and how are they implemented?"
        answer="Error Boundaries are components that catch JavaScript errors in their child component tree, log them, and display a fallback UI. They are implemented using class components with getDerivedStateFromError and componentDidCatch."
      />
      <h2 className="title">Error Boundary Demo</h2>
      <p>Click the button below to simulate an error.</p>
      <button className="button is-danger" onClick={() => setShouldThrow(true)}>
        Trigger Error
      </button>
    </div>
  );
};

export default BuggyComponent;