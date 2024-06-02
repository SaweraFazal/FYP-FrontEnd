import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CleanPage from './CleanPage'; // Import CleanPage component
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import TitlePage from './TitlePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clean" element={<CleanPage />} /> {/* Add route for CleanPage */}
      </Routes>
    </Router>
  );
};

export default App;
