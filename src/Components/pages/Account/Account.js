import React from "react";
import "./Account.css";

function Account() {
  return (
    <div className="container">
      <h1>Account</h1>
      <div className="container" id="accountMileage">
        <h2>Mileage</h2>
        <div className="container">
          <div className="card" id="mileageData"></div>
          <div className="card" id="mileageGraph"></div>
        </div>
      </div>
      <div className="container" id="accountTips">
        <h2>Tips</h2>
        <div className="container">
          <div className="card" id="tipsData"></div>
          <div className="card" id="tipsGraph"></div>
        </div>
        </div>
    </div>
  );
}

export default Account;
