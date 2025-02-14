import React from 'react';

const QABox = ({ question, answer }) => {
  return (
    <article className="message is-info" style={{ marginBottom: '1rem' }}>
      <div className="message-header">
        <p>{question}</p>
      </div>
      <div className="message-body">{answer}</div>
    </article>
  );
};

export default QABox;