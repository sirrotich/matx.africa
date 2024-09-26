// Dashboard.jsx
import React, { useState } from 'react';
import '../styles/Dashboard.css';
import { FaChartArea, FaHeartbeat, FaBrain, FaMapMarkerAlt, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Importing necessary icons
import logo from '../assets/Vector.png'; // Update the path based on your project structure

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Default selected item to the first one

  const sidebarItems = [
    { text: 'Overview', icon: <FaChartArea /> },      // Container icon for Overview
    { text: 'Trends', icon: <FaHeartbeat /> },         // Activity icon for Trends
    { text: 'matX AI', icon: <FaBrain /> },            // Brain icon for matX AI
    { text: 'Locations', icon: <FaMapMarkerAlt /> },  // Hotspot icon for Locations
    { text: 'Notifications', icon: <FaBell /> },       // Bell icon for Notifications
    { text: 'Settings', icon: <FaCog /> },             // Gear icon for Settings
    { text: 'Logout', icon: <FaSignOutAlt /> },        // Logout icon
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index); // Set selected item to clicked index
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-items">
          {sidebarItems.map((item, index) => (
            <div 
              className={`sidebar-item ${selectedItem === index ? 'selected' : ''}`} 
              key={index} 
              onClick={() => handleItemClick(index)}
            >
              <div className="sidebar-item-icon">{item.icon}</div>
              <span className="sidebar-item-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-cards">
          <div className="small-card">Card 1</div>
          <div className="small-card">Card 2</div>
          <div className="small-card">Card 3</div>
          <div className="small-card">Card 4</div>
        </div>

        <div className="large-card">
          <h3>Total Consumption</h3>
          {/* Graph placeholder */}
          <div className="graph-placeholder">Graph Here</div>
        </div>

        <div className="bottom-cards">
          <div className="small-card">Card 5</div>
          <div className="small-card">Card 6</div>
          <div className="small-card">Card 7</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
