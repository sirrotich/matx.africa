import React, { useState } from 'react';
import '../styles/Dashboard.css';
import { FaChartArea, FaHeartbeat, FaBrain, FaMapMarkerAlt, FaBell, FaCog, FaSignOutAlt, FaBars, FaUserCircle, FaArrowUp } from 'react-icons/fa'; // Importing necessary icons
import logo from '../assets/Vector.png'; // Update the path based on your project structure

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Default selected item to the first one
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State for toggling sidebar collapse

  const sidebarItems = [
    { text: 'Overview', icon: <FaChartArea /> },
    { text: 'Trends', icon: <FaHeartbeat /> },
    { text: 'matX AI', icon: <FaBrain /> },
    { text: 'Locations', icon: <FaMapMarkerAlt /> },
    { text: 'Notifications', icon: <FaBell /> },
    { text: 'Settings', icon: <FaCog /> },
    { text: 'Logout', icon: <FaSignOutAlt /> },
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="logo-container">
          {!isSidebarCollapsed && <img src={logo} alt="Logo" className="sidebar-logo" />}
        </div>
        <div className="sidebar-items">
          {sidebarItems.map((item, index) => (
            <div 
              className={`sidebar-item ${selectedItem === index ? 'selected' : ''}`} 
              key={index} 
              onClick={() => handleItemClick(index)}
            >
              <div className="sidebar-item-icon">{item.icon}</div>
              {!isSidebarCollapsed && <span className="sidebar-item-text">{item.text}</span>}
            </div>
          ))}
        </div>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Selected Sidebar Text and Profile */}
        <div className="header-section">
          <div className="selected-item-text">
            {sidebarItems[selectedItem].text}
          </div>
          <div className="profile-icon">
            <FaUserCircle size={48} />
          </div>
        </div>

        {/* Top Cards */}
        <div className="top-cards">
          <div className="small-card">
            <div className="card-text">Current Available</div>
            <div className="card-number">
              1200 Kg<FaArrowUp className="icon-right" />
            </div>
            <div className="card-subtext">As at 12:10 PM</div>
          </div>
          <div className="small-card">
            <div className="card-text">Today's Consumption</div>
            <div className="card-number">
              230 Kg<FaArrowUp className="icon-right" />
            </div>
            <div className="card-subtext">As at 12:10 PM</div>
          </div>
          <div className="small-card">
            <div className="card-text">This Month Consumption</div>
            <div className="card-number">
              5000 Kg<FaArrowUp className="icon-right" />
            </div>
            <div className="card-subtext">12 Days</div>
          </div>
          <div className="small-card">
            <div className="card-text">Monthly Average</div>
            <div className="card-number">
              3500 Kg<FaArrowUp className="icon-right" />
            </div>
            <div className="card-subtext">20 Months</div>
          </div>
        </div>

        {/* Large Card */}
        <div className="large-card">
          <h3>Total Consumption</h3>
          {/* Graph placeholder */}
          <div className="graph-placeholder">Graph Here</div>
        </div>

        {/* Bottom Cards */}
        <div className="bottom-cards">
          <div className="medium-card">Card 5</div>
          <div className="medium-card">Card 6</div>
          <div className="medium-card">Card 7</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
