import React from 'react';
import QABox from './QABox';

const LazyComponent = () => {
  return (
    <div className="content">
      <QABox
        question="How do you implement code splitting in a React application?"
        answer="Code splitting in React can be implemented using dynamic imports with React.lazy and Suspense, allowing components to be loaded asynchronously and reducing the initial bundle size."
      />
      <h2 className="title">Lazy Loaded Component</h2>
      <p>This component was loaded lazily using React.lazy and Suspense.</p>
    </div>
  );
};

export default LazyComponent;