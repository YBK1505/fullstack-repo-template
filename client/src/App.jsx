import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Welcome to {process.env.REACT_APP_APP_NAME || 'MyApp'}</h1>
      <p>Your full-stack React + Node.js app is ready to build.</p>
      <p>
        Backend API:{' '}
        <a href={process.env.REACT_APP_API_URL} target="_blank" rel="noreferrer">
          {process.env.REACT_APP_API_URL || 'http://localhost:5000'}
        </a>
      </p>
    </div>
  );
}

export default App;
