import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="content">
      <h1 className="title">Top 10 Senior ReactJS Developer Interview Concepts</h1>
      <p>
        This application, built with React 18 and the Bulma CSS framework, demonstrates advanced React concepts often discussed in technical interviews. Explore demos covering:
      </p>
      <ul>
        <li>Virtual DOM and performance optimizations</li>
        <li>React Hooks and state management</li>
        <li>Memoization techniques for avoiding unnecessary re-renders</li>
        <li>Controlled vs. uncontrolled components</li>
        <li>The Context API with multiple theme options</li>
        <li>Error boundaries for robust error handling</li>
        <li>Code splitting using React.lazy and Suspense</li>
        <li>Asynchronous data fetching and cleanup</li>
      </ul>
      <p>
        Use the navigation bar above to explore each demo along with the corresponding interview questions and answers.
      </p>
      <p>
        <Link className="button is-primary" to="/virtual">Explore Demos</Link>
      </p>
    </div>
  );
};

export default LandingPage;