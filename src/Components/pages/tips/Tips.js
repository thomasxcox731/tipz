import React from "react";
import "./Tips.css";

function Tips() {
  return (
    <div className="border border-dark container" id="tipsContainer">
      <div className="row">
      <div className="col-3"></div>
        <div className="col-6"><h1 id="tipsHeading">Tipz</h1></div>
      </div>
      <div className="row">
      <div className="col-2"></div>
        <div className="col-8">
        <form>
        <div className="form-group">
          <label for="username"></label>
          <input type="number" className="form-control" id="inputTip"  placeholder="$0.00"></input>
        </div>
        <div className="form-group">
          <label for="date"></label>
          <input type="date" className="form-control" id="inputDate" placeholder=""></input>
        </div>
        <button type="log" className="btn btn-primary" id="log">Log</button>
      </form>
        </div>
      </div>
    </div>
  );
}

export default Tips;
