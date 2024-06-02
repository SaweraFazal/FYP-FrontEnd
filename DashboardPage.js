import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState({
    pdf: null,
    word: null,
    csv: null,
    url: ''
  });

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setSelectedFiles({
      ...selectedFiles,
      [id]: files[0]
    });
  };

  const handleUrlChange = (e) => {
    setSelectedFiles({
      ...selectedFiles,
      url: e.target.value
    });
  };

  const handleUpload = () => {
    navigate('/clean');
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
        <h1>Select your resource</h1>
        <p>Select the data type that you would like to use</p>
        <div className="box-container">
          <div className="box">
            <h2>PDF File</h2>
            <input type="file" id="pdf" accept=".pdf" onChange={handleFileChange} />
          </div>
          <div className="box">
            <h2>Word Document</h2>
            <input type="file" id="word" accept=".doc,.docx" onChange={handleFileChange} />
          </div>
          <div className="box">
            <h2>CSV File</h2>
            <input type="file" id="csv" accept=".csv" onChange={handleFileChange} />
          </div>
          <div className="box">
            <h2>URL</h2>
            <input type="text" id="url" value={selectedFiles.url} onChange={handleUrlChange} placeholder="Enter URL" />
          </div>
        </div>
        <button onClick={handleUpload} className="upload-button">Upload</button>
      </div>
    </div>
  );
};

export default DashboardPage;
