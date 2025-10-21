import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f9f4ef',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '6rem', color: '#6f4e37', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#4b3832', marginBottom: '1rem' }}>
        Page Not Found
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <div>
        <Link 
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.8rem 2rem',
            background: '#6f4e37',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'background 0.3s ease'
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

