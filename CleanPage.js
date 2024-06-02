import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

const CleanPage = () => {
  const navigate = useNavigate();

  const handleClean = () => {
    // Add logic for cleaning data
    alert('Data cleaned!');
  };

  return (
    <div className="dashboard-page">
      <div className="sidebar">
        <ul>
          <li className="active">UserName</li>
          <li>Clean Data</li>
        </ul>
      </div>
      <div className="content">
        <h1>Clean Your Data</h1>
        <div className="box-container">
         
          <div className="box word-box">URL Filteration</div>
          <div className="box csv-box">Text Extraction</div>
          <div className="box csv-box">Language Identification</div>
          <div className="box csv-box">Repetition Removal</div>
          <div className="box csv-box">Document-wise filtering</div>
          <div className="box csv-box">Line-wise correction</div>
          <div className="box csv-box">Deduplication</div>
         
         
        </div>
        <button onClick={handleClean} className="upload-button">Clean</button>
      </div>
    </div>
  );
};

export default CleanPage;
