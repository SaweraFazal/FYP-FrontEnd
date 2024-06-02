import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TitlePage.css';

const TitlePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="title-page">
      <h1>AI4org</h1>
      <p>Just upload your data , and get your data clean, 
 may ask questions about your data.</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default TitlePage;