import React, { useState, useEffect } from 'react';
import QABox from './QABox';

const DataFetcher = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.slice(0, 10)); // Limit to 10 posts for demo purposes.
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="content">
      <QABox
        question="How do you handle asynchronous data fetching in React components?"
        answer="Asynchronous data fetching is typically handled in useEffect using an async function and proper cleanup, such as with an AbortController, to manage side effects."
      />
      <h2 className="title">Data Fetcher Demo</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p className="has-text-danger">Error: {error}</p>}
      {!loading && !error && (
        <div>
          {posts.map((post) => (
            <div key={post.id} className="box" style={{ marginBottom: '1rem' }}>
              <h3 className="subtitle">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataFetcher;