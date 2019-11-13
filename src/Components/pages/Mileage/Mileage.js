import React, { Component } from "react";
import $ from "jquery";
import API from "../../../utils/API"
//importing this deconsctructed as React, {Component} is mostly for readability.
//I don't think you need this ^^
import "./Mileage.css";
//import your API from your utils folder. Look at the final book-app that we
//built in class for an example of a good api.
class Mileage extends Component {
    state = {
        results: "",
        dropdownVal: "",
        stopsArr: [],
        route: "",
        url: "",
        totalDist: 0
    }


    // After you setup the state, you should define your methods for this component. 
    //You can think of components as a complex object. Just like the constructors we used
    //to build in plain Javascript. Any functions you put in here can update the state
    //and therefore can change the way the application behaves or looks.

    //These are examples of what your methods might look like based on the code you sent.
    populateStops = x => {
        // super()
        // change state.dropdownVal to dropdown selection - SEE LINE 89
        this.setState({dropdownVal: this.menu.value})



        // Remove previous divs if "dropdown" number changes.
        $("<div/>").attr('id', 'Stops').appendTo('page');
        for (let j = 5; j >= 0; j--) {
            let stop = "stop" + j;
            $('.' + stop).remove();
        }
        var i = 0;
        // Generate [i] number of input fields, where [i] is 'dropdown' number.
        for (var i = 1; i <= x; i++) {
            var stop = "stop" + i;
            var street = "street" + i;
            var city = "city" + i;
            var state = "state" + i;
            $("#Stops").append("<div class=" + stop + ">");
            // console.log(stop);
            $('.' + stop).html("<h2>Stop " + i + ": <br /></h2>" +
                "Street:<input id='" + street + "' class='input' type='text' /><br />" +
                "City:<input id='" + city + "' class='input' type='text' /><br />" +
                "State:<input id='" + state + "' class='input' type='text' /><br />");
        }
        // prevents additional 'submit' buttons from appending on page
        $("#submitApi").remove();
        // create submit button after all 'stops' inputs
        $("#Stops").append("<input id='submitApi' type='submit' /></div>")
        console.clear();
        console.log(
            i - 1 + " stops entered" +
            "\n-----------------------");





    }

    handleSubmit = () => { }

    fetchAddress = () => { }

    //The render method is required with a Class Component, 
    //it will examine the state and props (if there are any) and render the 
    //elements specified in the return statement following.
    render() {
        return (
            //     {/*This is where you'd put the components on the page along with any
            // props you'd need to pass into them; including onClick functions.
            // Be sure to wrap them in a div */}


            // ******************** Revise 'class' to 'className'??? ******************//
            <body>
                <div class="card">
                    <h2>Please Enter Start Location: <br /></h2>
                    Street:<input id="startStreet" class="input" type="text" /><br />
                    City:<input id="startCity" class="input" type="text" /><br />
                    State:<input id="startState" class="input" type="text" /><br />
                    <div id="page"></div>
                    <div id="results"></div>
                    <div id="Stops">
                        How Many Stops on your route?
                        <select id = "dropdown" ref = {(input)=> this.menu = input}>
                            <option selected hidden disabled>Please Select a response</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input id="submitStops" type="submit" onClick={this.populateStops()}/>
                    </div>

                </div>
                <div id="results">
                    {this.state.results}
                </div>

            </body>
        )
    }
=======
function Mileage() {
  return (
    <div className="container" id="mileageContainer">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6"><h1> Mileage</h1></div>
      </div>
      <br></br>
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
      <br></br>
      <div>
        <button type="startTrip" className="btn btn-success">Start Trip</button>
        <button type="endTrip" className="btn btn-danger">End Trip</button>
      </div>

    </div>
  );

}

export default Mileage