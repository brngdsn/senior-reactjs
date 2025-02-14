import React, { useState, useRef } from 'react';
import QABox from './QABox';

const FormDemo = () => {
  const [controlledValue, setControlledValue] = useState('');
  const uncontrolledRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      controlled: controlledValue,
      uncontrolled: uncontrolledRef.current.value,
    });
  };

  return (
    <div className="content">
      <QABox
        question="What is the difference between controlled and uncontrolled components in React?"
        answer="Controlled components are managed by React state, making React the source of truth, whereas uncontrolled components use refs to manage state internally in the DOM."
      />
      <h2 className="title">Controlled vs Uncontrolled Components Demo</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Controlled Input:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={controlledValue}
              onChange={(e) => setControlledValue(e.target.value)}
              placeholder="Controlled input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Uncontrolled Input:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              ref={uncontrolledRef}
              placeholder="Uncontrolled input"
            />
          </div>
        </div>
        <button className="button is-link" type="submit">
          Submit
        </button>
      </form>
      {submittedData && (
        <div className="notification is-primary" style={{ marginTop: '1rem' }}>
          <p>
            <strong>Submitted Data:</strong>
          </p>
          <p>Controlled: {submittedData.controlled}</p>
          <p>Uncontrolled: {submittedData.uncontrolled}</p>
        </div>
      )}
    </div>
  );
};

export default FormDemo;