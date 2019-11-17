import React from "react";
import "./Account.css";
import MileageChart from "../../MileageChart/chart";
import TipsChart from "../../TipsChart/tchart";


class Account extends React.Component {
  render() {
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
              <TipsChart />
            </div>
            <div className="card" id="tipsData"></div>
          </div>
        </div>
      </div>
    )
  };
}

export default Account;
