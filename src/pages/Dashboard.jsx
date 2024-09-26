import React, { useState } from 'react';
import '../styles/Dashboard.css';
import { FaChartArea, FaHeartbeat, FaBrain, FaMapMarkerAlt, FaBell, FaCog, FaSignOutAlt, FaBars, FaUserCircle, FaArrowUp, FaChevronDown } from 'react-icons/fa'; // Updated with FaChevronDown for filter icons
import logo from '../assets/Vector.png'; // Update the path based on your project structure

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Default selected item to the first one
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State for toggling sidebar collapse

  // States for managing filter selections
  const [filterType, setFilterType] = useState('All Types');
  const [filterLocation, setFilterLocation] = useState('All Locations');
  const [filterYear, setFilterYear] = useState('This Year');

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
            <div className="card-text">This Month's Consumption</div>
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

        {/* Large Card with Filters */}
        <div className="large-card">
          <div className="large-card-header">
            <h3>Total Consumption</h3>
            <div className="filters-container">
              <button className="filter-button">
                {filterType} <FaChevronDown />
              </button>
              <button className="filter-button">
                {filterLocation} <FaChevronDown />
              </button>
              <button className="filter-button">
                {filterYear} <FaChevronDown />
              </button>
            </div>
            
          </div>
          {/* Total consumption Graph  */}

          <div class="graph-holder">
    <div class="vertical-bar"></div>
    <div class="months-data">
        <div class="month-container">
        <button class="month-button" id="jan-button" onclick="showReading('jan')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('jan')">
                <div class="month-reading" id="jan-reading">10</div>
            </div>
            <div class="month-label">Jan</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="feb-button" onclick="showReading('feb')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('feb')">
                <div class="month-reading" id="feb-reading">20</div>
            </div>
            <div class="month-label">Feb</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">Mar</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">Apr</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">May</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">June</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">July</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">Aug</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">Sept</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">Oct</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">Nov</div>

        </div>
        <div class="month-container">
        <button class="month-button" id="mar-button" onclick="showReading('mar')">Show</button>

            <div class="graph-bar" onclick="toggleMonthReading('mar')">
                <div class="month-reading" id="mar-reading">15</div>
            </div>
                        <div class="month-label">Dec</div>

        </div>
    </div>
</div>


        </div>

        <div className='location-title'>
            <div className='location-text'>Location Based Consumption By</div>
            <div className='picker'>
                <div className='segmented-picker'></div>
            </div>
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
