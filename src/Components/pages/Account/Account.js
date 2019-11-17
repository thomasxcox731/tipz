import React from "react";
import "./Account.css";
// import C3Chart from 'react-c3js';
// import 'c3/c3.css';
import MileageChart from "../../MileageChart/chart";
import TipsChart from "../../TipsChart/tchart";


function Account() {
  return (
    <div className="container">
      <h1>Account</h1>
      <div className="container" id="accountMileage">
        <h2>Mileage</h2>
        <div className="container"> <div className="card" id="mileageGraph">
          <MileageChart />
        </div>
          <div className="card" id="mileageData"></div>
        </div>
      </div>
      <div className="container" id="accountTips">
        <h2>Tips</h2>
        <div className="container">
          <div className="card" id="tipsGraph">
            <TipsChart/>
          </div>
          <div className="card" id="tipsData"></div>
        </div>
      </div>
    </div>
  );
}

export default Account;
