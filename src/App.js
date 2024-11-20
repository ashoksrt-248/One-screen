import React from "react";
import GaugeChart from "react-gauge-chart";
import "./Dashboard.css";
import sub from "./images/sub.png";
import mainlogo from "./images/mainlogo.png";

const App = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        <div className="logo">
        <img src={mainlogo} alt="Core Refrigeration" className="core-image" />
        </div>
        <div className="company-info">
          <h2>SMITHFIELD FOODS</h2>
          <p>410 South Kirk Road,<br/> St. Charles, IL</p>
        </div>
        <div className="date-time">
          <h3>Tue Nov 20th, 2024</h3>
          <p>07:28 AM</p>
        </div>
        <div className="date-time">
        <img src={sub} alt="Core Refrigeration" className="core-image" />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Gauges Section */}
        <div className="gauges-container">
        {/* Engineering Gauge */}
        <div className="gauge-item">
          <h2>ENGINEERING</h2>
          <GaugeChart
            id="engineering-gauge"
            nrOfLevels={4} // 4 levels
            percent={97 / 105} // Set your percentage
            colors={["#FF0000", "#FFA500", "#FFFF00", "#008000"]} // 4 colors (Red, Orange, Yellow, Green)
            arcWidth={0.2}  // Adjust width to avoid gaps
            arcPadding={0}  // Set padding to 0 to ensure smooth color transitions
            needleColor="#FFFFFF"
            textColor="#FFFFFF"
            hideText={true}
          />
          <h3>97 / 105</h3>
        </div>

        {/* Load Analysis Gauge */}
        <div className="gauge-item">
          <h2>LOAD ANALYSIS</h2>
          <GaugeChart
            id="load-analysis-gauge"
            nrOfLevels={4} // 4 levels
            percent={24 / 27}
            colors={["#FF0000", "#FFA500", "#FFFF00", "#008000"]}
            arcWidth={0.2}
            arcPadding={0}
            needleColor="#FFFFFF"
            textColor="#FFFFFF"
            hideText={true}
          />
          <h3>24 / 27</h3>
        </div>

        {/* NDT Punch List Gauge */}
        <div className="gauge-item">
          <h2>NDT PUNCH LIST</h2>
          <GaugeChart
            id="ndt-punch-list-gauge"
            nrOfLevels={3} // 4 levels
            percent={37 / 16}
            colors={["#FF0000", "#FFA500", "#FFFF00"]}
            arcWidth={0.2}
            arcPadding={0}
            needleColor="#FFFFFF"
            textColor="#FFFFFF"
            hideText={true}
          />
          <h3>37</h3>
        </div>

        {/* MI Punch List Gauge */}
        <div className="gauge-item">
          <h2>MI PUNCH LIST</h2>
          <GaugeChart
            id="mi-punch-list-gauge"
            nrOfLevels={3} // 4 levels
            percent={13 / 3}
            colors={["#FF0000", "#FFA500", "#FFFF00"]}
            arcWidth={0.2}
            arcPadding={0}
            needleColor="#FFFFFF"
            textColor="#FFFFFF"
            hideText={true}
          />
          
          <h3>13</h3>
        </div>
      </div>

        {/* Notifications and Deadlines */}
        <div className="info-section">
          <div className="notifications">
            <h4><u>NOTIFICATIONS</u></h4>
            <ol>
              <li>27 days until NDT Severe items need completed</li>
              <li>MEB/NH3 Calc updates needed for MOC 2024-112</li>
              <li>62 Days until Annual MEB...<br/> See More...</li>
            </ol>
          </div>
          <div className="deadlines">
            <h4><u>DEADLINES</u></h4>
            <ol>
              <li>ANNUAL MEB REVIEW: 12/1/25</li>
              <li>PSM AUDIT: 2/18/25</li>
              <li>MI INSPECTION: 9/15/25</li>
              <li>NDT INSPECTION: 7/1/28</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="inventory">
          <h1>
            AMMONIA INVENTORY: <span>127,342 LBS</span> | LAST UPDATED:{" "}
            <span>05/15/2024</span>
          </h1>
        </div>
        <div  className="button-container">
          <button className="button">Home</button>
          <button className="button">
          <a href="https://cedar.cesns.ai/dashboard" className="link">Engineering Drawing</a>
          </button>
          <button className="button"><a href="https://cedar.cesns.ai/LADConfig"  className="link">Load Analysis</a></button>
          <button className="button"><a href="https://cedar.cesns.ai/dashboard" className="link">Database</a></button>
          <button className="button">Reports</button>
          <button className="button">Upload</button>
          <button className="button">Calendar</button>
          <button className="button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default App;
