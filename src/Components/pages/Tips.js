import React from "react";

function Tips() {
  return (
    <div className="container">
      <h1>Tips/Gratuity</h1>
      <div className="form-group">
        <label for="inputTip">Tips/Gratuity:</label>
        <input type="text" className="form-control" id="inputTip" ></input>
      </div>
      <div className="form-group">
        <label for="inputDate">Date</label>
        <input type="text" className="form-control" id="inputDate" ></input>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  );
}

export default Tips;
