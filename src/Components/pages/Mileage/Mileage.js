import React from "react";
import "./Mileage.css";

function Mileage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6"><h1> Mileage</h1></div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form>
            <select class="form-control form-control">
              <option>Work</option>
              <option>Medical</option>
              <option>Moving</option>
            </select>
          </form>
        </div>
      </div>
      <div>
        <button type="startTrip" className="btn btn-success">Start Trip</button>
        <button type="endTrip" className="btn btn-danger">End Trip</button>
      </div>

    </div>
  );
}

export default Mileage;
