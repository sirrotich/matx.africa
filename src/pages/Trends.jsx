import React, { useState } from "react";
import "../styles/Trends.css";
import {
  FaChartArea,
  FaHeartbeat,
  FaBrain,
  FaMapMarkerAlt,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaUserCircle,
  FaArrowUp,
  FaChevronDown,
} from "react-icons/fa"; // Updated with FaChevronDown for filter icons
import logo from "../assets/Vector.png"; // Update the path based on your project structure

const Trends = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Default selected item to the first one
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State for toggling sidebar collapse

  // States for managing filter selections
  const [filterType, setFilterType] = useState("All Types");
  const [filterLocation, setFilterLocation] = useState("All Locations");
  const [filterYear, setFilterYear] = useState("All Days");

  const sidebarItems = [
    { text: "Overview", icon: <FaChartArea /> },
    { text: "Trends", icon: <FaHeartbeat /> },
    { text: "matX AI", icon: <FaBrain /> },
    { text: "Locations", icon: <FaMapMarkerAlt /> },
    { text: "Notifications", icon: <FaBell /> },
    { text: "Settings", icon: <FaCog /> },
    { text: "Logout", icon: <FaSignOutAlt /> },
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="Trends-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="logo-container">
          {!isSidebarCollapsed && (
            <img src={logo} alt="Logo" className="sidebar-logo" />
          )}
        </div>
        <div className="sidebar-items">
          {sidebarItems.map((item, index) => (
            <div
              className={`sidebar-item ${
                selectedItem === index ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              <div className="sidebar-item-icon">{item.icon}</div>
              {!isSidebarCollapsed && (
                <span className="sidebar-item-text">{item.text}</span>
              )}
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
        <div className="col-12 segment">
          <div className="nav-bar1 col-6 ">
            <div className=" bg-ratings p-2">
              <div className="btn btn-beige btn-sm  rounded me-3 text-white">
                Highest consumption
              </div>
              <div className="btn btn-beige btn-sm  rounded text-white">
                Lowest Consumption
              </div>
            </div>
          </div>
          <div className="nav-bar col-6">
            <div className="filters-container float-end">
              <button className="filter-button">
                {filterType} <FaChevronDown />
              </button>
              <button className="filter-button">
                {filterLocation} <FaChevronDown />
              </button>
            </div>
          </div>
        </div>

        {/* Top Cards */}
        <div className="top-cards">
          <div className="small-card">
            <div className="card-text">By time period</div>
            <div className="card-number">
              1200 Kg
              <FaArrowUp className="icon-right" />
            </div>
            <div className="card-subtext">As at 12:10 PM</div>
          </div>
          <div className="small-card">
            <div className="card-text">By day of the wek</div>
            <div className="card-number">
              230 Kg
              <FaArrowUp className="icon-right" />
            </div>
            <div className="card-subtext">As at 12:10 PM</div>
          </div>
          <div className="small-card">
            <div className="card-text">By date of the month</div>
            <div className="card-number">
              5000 Kg
              <FaArrowUp className="icon-right" />
            </div>
            <div className="card-subtext">12 Days</div>
          </div>
          <div className="small-card">
            <div className="card-text">By month</div>
            <div className="card-number">
              3500 Kg
              <FaArrowUp className="icon-right" />
            </div>
            <div className="card-subtext">20 Months</div>
          </div>
        </div>

        {/* Large Card with Filters */}
        <div className="large-card">
          <div className="large-card-header">
            <h3>Consumption Within 24 Hours</h3>

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

          <div className="graph-holder">
            <div className="vertical-bar"></div>
            <div className="months-data">
              <div className="month-container">
                <button
                  className="month-button"
                  id="12AM-button"
                  onClick="showReading('12  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('12  AM')"
                >
                  <div className="month-reading" id="12AM-reading">
                    0
                  </div>
                </div>
                <div className="month-label">12 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="1AM-button"
                  onClick="showReading('1 AM')"
                >
                  Show
                </button>

                <div className="graph-bar" onClick="toggleMonthReading('1 AM')">
                  <div className="month-reading" id="1AM-reading">
                    0
                  </div>
                </div>
                <div className="month-label">1 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="2AM-button"
                  onClick="showReading('2  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="2AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">2 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="3AM-button"
                  onClick="showReading('3 AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="3AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">3 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="4AM-button"
                  onClick="showReading('4  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="4 AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">4 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="5AM-button"
                  onClick="showReading('5 AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="5AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">5 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="6AM-button"
                  onClick="showReading('6  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="6AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">6 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="7AM-button"
                  onClick="showReading('7  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="7AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">7 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="8AM-button"
                  onClick="showReading('8  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="8AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">8 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="9AM-button"
                  onClick="showReading('9  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="9AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">9 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="10AM-button"
                  onClick="showReading('10  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="10AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">10 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="11AM-button"
                  onClick="showReading('11  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="11AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">11 AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="location-title">
          <div className="location-text">Consumption By Cylinders </div>
          <div className="filters-container1">
            <button className="filter-button1">
              {filterType} <FaChevronDown />
            </button>
            <button className="filter-button1">
              {filterLocation} <FaChevronDown />
            </button>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="bottom-cards">
          <div className="medium-card">
            <div className="highest">
              <div className="highest-data">
                <div className="highest-text">Total</div>
                <div className="highest-kg">200 Cylinders </div>
                <div className="highest-location">9 tons</div>
              </div>
            </div>
          </div>

          <div className="medium-card">
            <div className="second-highest">
              <div className="second-highest-data">
                <div className="second-highest-text"> Weekly</div>
                <div className="second-highest-kg">4 cylinders </div>
                <div className="second-highest-location">180 Kg</div>
              </div>
            </div>
          </div>
          <div className="medium-card">
            <div className="lowest">
              <div className="lowest-data">
                <div className="lowest-text">Monthly</div>
                <div className="lowest-kg">16 Cylinders Kg</div>
                <div className="lowest-location">720 kg </div>
              </div>
            </div>
          </div>

          <div className="medium-card">
            <div className="furthest">
              <div className="furthest-data">
                <div className="furthest-text">Yearly</div>
                <div className="furthest-kg">192 Cylinders Kg</div>
                <div className="furthest-location"> 8.6 tons </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trends;
