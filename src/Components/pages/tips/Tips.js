import React from "react";
import "./Tips.css";

function Tips() {
  return (
    <div className="container" >
      <div className="row">
      <div className="col-3"></div>
        <div className="col-6"><h1>Tips/Gratuities</h1></div>
      </div>
      <div className="row">
      <div className="col-3"></div>
        <div className="col-6">
        <form>
        <div className="form-group">
          <label for="username"></label>
          <input type="number" className="form-control" id="inputTip"  placeholder="Tips"></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1"></label>
          <input type="date" className="form-control" id="inputDate" placeholder=""></input>
        </div>
        <div><button type="log" className="btn btn-primary">Log</button></div>
      </form>
        </div>
      </div>
    </div>
  );
}

export default Tips;
