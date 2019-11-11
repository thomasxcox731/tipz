import React from "react";
import "./Mileage.css";

function Mileage() {
  return (
    <div className="container">
      <h1>Enter Mileage</h1>
      <button type="startTrip" className="btn btn-primary">Start Trip</button>
      <button type="endTrip" className="btn btn-danger">End Trip</button>
      <select class="form-control form-control-lg">
        <option>Work</option>
        <option>Medical</option>
        <option>MOving</option>
      </select>
    </div>
  );
}

export default Mileage;
