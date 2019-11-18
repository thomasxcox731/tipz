import React, { Component } from "react";
import "./Tips.css";
import API from "../../../utils/API"
import $ from 'jquery'


class Tips extends Component {
  state = {
    username: "",
    password: "",
    mileage: 0,
    category: "",
    mileageDate: "",
    tips: 0,
    tipsDate: "",
  }


  // SEE 20-11 - INPUT CHANGE
  // HANDLE CHANGE FUNCTION
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log([name] + ": " + value)
  };



  handleMileageSubmit = event => {
    // event.preventDefault();
    this.setState({
      mileage: event.target.value
      // category: ,
      // mileageDate: ,
    });
    console.log(this.state.mileage);
    API.postMileage({
      mileage: this.state.mileage,
      category: this.state.category,
      mileageDate: this.state.mileageDate
    }).catch(err => console.log("Mileage Form: " + err));
    console.log(this.state.category)
    $("#logMileage").html("<h5>" + this.state.category + ": " + this.state.mileage + " miles added!</h5>");
  };

  handleTipSubmit = event => {
    // event.preventDefault();
    API.postTips({
      tips: this.state.tips,
      tipsDate: this.state.tipsDate,
    }).catch(err => console.log("Tips Form: " + err));
    $("#logTips").html("<h5>$" + this.state.tips + " added for " + this.state.tipsDate + "</h5>");
    console.log(this.state.tips);
  };

  render() {
    return (
      <div id="page">

        <div className="container" id="tipsContainer">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6"><h1 id="tipsHeading">Tipz</h1></div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div id="tipsCard" className="col-8">
              <form>
                <div className="form-group">
                  <label>
                    <h4>Amount</h4>
                  </label>
                  <input type="number" name="tips" onChange={this.handleInputChange} className="form-control" id="inputTip" placeholder="$0.00"></input>
                </div>
                <div className="form-group">
                  <label>
                    <h4>Date</h4>
                  </label>
                  <input type="date" name="tipsDate" onChange={this.handleInputChange} className="form-control" id="inputDate" placeholder=""></input>
                  <button type="button" className="btn btn-primary" id="log" onClick={this.handleTipSubmit}>Log Tips</button>
                </div>

                <div id="logTips"></div>
              </form>
            </div>
          </div>
        </div>


        <div className="container" id="mileageContainer">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6"><h1 id="tipsHeading">Tripz</h1></div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div id="mileageCard" className="col-8">
              <form>
                <div className="form-group">
                  <label>
                    <h4>Miles</h4>
                  </label>
                  <input type="number" name="mileage" onChange={this.handleInputChange} className="form-control" id="inputDate" placeholder="00"></input>

                  <div className="form-group">
                    <label>
                      <h4>Date</h4>
                    </label>
                    <input type="date" name="mileageDate" onChange={this.handleInputChange} className="form-control" id="inputDate" ></input>
                  </div>

                  <div className="form-group">
                    <select name="category" onChange={this.handleInputChange} id="dropdown">
                      <option value hidden>Please select a category</option>
                      <option value="Work">Work</option>
                      <option value="Medical">Medical</option>
                      <option value="Moving">Moving</option>
                    </select></div>
                  <button type="button" name="mileageDate" onChange={this.handleInputChange} className="btn btn-primary" id="log" onClick={this.handleMileageSubmit}>Log Mileage</button>
                  <div id="logMileage"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img className="pixChar" alt="Tom" src="Tompix.gif" />

      </div>




    )
  };

}
export default Tips;
