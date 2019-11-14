import React from "react";
import "./Tips.css";

function Tips() {
  return (
    <div id="page">
      <div className="container" id="mileageContainer">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6"><h1 id="tipsHeading">Tripz</h1></div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <form>
              <div className="form-group">
                <label for="miles"></label>
                <h4>Miles</h4>
                <input type="number" className="form-control" id="inputTip" placeholder="0.0" />

                <div className="form-group">
                  <label for="date"></label>
                  <h4>Date</h4>
                  <input type="date" className="form-control" id="inputDate" placeholder=""></input>
                </div>

                <div className="form-group">
                  <select id="dropdown">
                    <option selected hidden disabled>Please select a category</option>
                    <option value="1">Work</option>
                    <option value="2">Medical</option>
                    <option value="3">Moving</option>
                  </select></div>
                <button type="log" className="btn btn-primary" id="log">Log</button>
              </div>
            </form>
          </div>
        </div>
      </div>




      <div className="container" id="tipsContainer">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6"><h1 id="tipsHeading">Tipz</h1></div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <form>
              <div className="form-group">
                <label for="dollars"></label>
                <h4>Amount</h4>
                <input type="number" className="form-control" id="inputTip" placeholder="$0.00"></input>
              </div>
              <div className="form-group">
                <label for="date"></label>
                <h4>Date</h4>
                <input type="date" className="form-control" id="inputDate" placeholder=""></input>
              </div>
              <button type="log" className="btn btn-primary" id="log">Log</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tips;
