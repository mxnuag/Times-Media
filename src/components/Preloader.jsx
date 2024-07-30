// src/components/Preloader.js
import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Preloader duration in milliseconds

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="newspaper-icon">📰</div>
        <div className="funny-sentence">Loading the latest headlines... Stay tuned!</div>
      </div>
    </div>
  );
};

export default Preloader;
