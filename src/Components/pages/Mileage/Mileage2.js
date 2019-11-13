import React from "react";
import {render} from 'react-dom';
import ReactDOM from "react-dom";
import $ from 'jquery';
import "./Mileage.css";

ReactDOM.render(<Mileage />, document.getElementById("root"));

function Mileage() {
  render();{
    var dropdownVal = "";
    var stopsArr = [];
    var route = "";
    var url = "";
    var totalDist = 0;

    return (
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Mileage2</title>
    </head>
    
    <body>
    
        <div class="card">
            <h2>Please Enter Start Location: <br /></h2>
            Street:<input id="startStreet" class="input" type="text" /><br />
            City:<input id="startCity" class="input" type="text" /><br />
            State:<input id="startState" class="input" type="text" /><br />
        </div>
    
        <div id="page"></div>
        <div id="results"></div>
        <div id="Stops">
            How Many Stops on your route?
            <select id="dropdown">
                <option selected hidden disabled>Please Select a response</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input id="submitStops" type="submit" />
        </div>
    
        <script>
            {$("#page").html("<br />")}
            {/* var dropdownVal = "";
            var stopsArr = [];
            var route = "";
            var url = "";
            var totalDist = 0; */}
  
            {/* // click function for "How many stops?" submit button */}
            {$("#submitStops").click(function (event) {
                event.preventDefault();
                stopsArr = [];
                populateStops($('#dropdown').val());
                dropdownVal = $('#dropdown').val();
                
                // populateStops function where 'x' is the number selected in the dropdown.
                function populateStops(x) {
                    // Remove previous divs if "dropdown" number changes.
                    $("<div/>").attr('id', 'Stops').appendTo('page');
                    for (let j = 5; j >= 0; j--) {
                        let stop = "stop" + j;
                        $('.' + stop).remove();
                    }
                    var i = 0;
                    // Generate [i] number of input fields, where [i] is 'dropdown' number.
                    for (let i = 1; i <= x; i++) {
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
            })};
    
            {/* // click function to initialize API call with 'stops'  */}
            {$(document).on('click', '#submitApi', function (event) {
                event.preventDefault();
                var apiKey = "AIzaSyCHZqKS_YadIq4eOAtVad2cxcHixlT6poI"
                $("#results").html("<h1>WORKING...</h1><hr />")
    
    
    
                // Start Location
                var startStreet = $("#startStreet").val();
                var startCity = $("#startCity").val();
                var startState = $("#startState").val();
    
                var ip = "https://maps.googleapis.com/maps/api/geocode/json?address=" + startStreet.split(" ").join("+") + ",+" + startCity.split(" ").join("+") + ",+" + startState + "&sensor=false&key=" + apiKey;
                // Ajax call for to convert address to lat/long
                $.ajax({
                    url: ip,
                    method: "GET"
                }).then(function (response) {
                    var addr = response.results[0].formatted_address;
                    var lat = response.results[0].geometry.location.lat;
                    var long = response.results[0].geometry.location.lng;
                    var coords = long + "," + lat + ";";
                    // push lat/long to 'stopsArr' array.
                    stopsArr.push(coords);
                    console.log("START: \n" + addr + "\n" + lat + ", " + long);
    
                    // *********** STOPS API ************* //
                    for (var i = 1; i <= dropdownVal; i++) {
                        var apiAddress = (($('#street' + i).val()).split(" ").join("+")) + ",+" + (($('#city' + i).val()).split(" ").join("+")) + ",+" + $('#state' + i).val();
                        // console.log(apiAddress);
                        var ip = "https://maps.googleapis.com/maps/api/geocode/json?address=" + apiAddress + "&sensor=false&key=" + apiKey;
    
                        $.ajax({
                            url: ip,
                            method: "GET"
                        }).then(function (response) {
                            // var addr = response.results[0].formatted_address;
                            var lat = response.results[0].geometry.location.lat;
                            var long = response.results[0].geometry.location.lng;
                            var coords = long + "," + lat + ";";
                            stopsArr.push(coords);
                        }).then(function () {
                            route = stopsArr.toString();
                            setTimeout(() => {
                                route = route.replace(";,", ";");
                                route = route.slice(0, -1);
    
                                // route = route.replace(";,", ";")
                                url = "https://api.mapbox.com/optimized-trips/v1/mapbox/driving/" + route + "?access_token=pk.eyJ1Ijoic2h0ZXZldG0iLCJhIjoiY2syM2V5c2huMHdiazNmcWMzbHd3ZXl5ZiJ9.rnLws1iCGFFsUGsted9fRw"
                                // https://api.mapbox.com/optimized-trips/v1/mapbox/driving/-122.42,37.78;-122.45,37.91;-122.48,37.73?annotations=distance        &access_token=pk.eyJ1Ijoic2h0ZXZldG0iLCJhIjoiY2syM2V5c2huMHdiazNmcWMzbHd3ZXl5ZiJ9.rnLws1iCGFFsUGsted9fRw
                                // https://api.mapbox.com/optimized-trips/v1/mapbox/driving/-119.4179324,36.778261;-99.9018131,31.9685988;-118.2436849,34.0522342?access_token=pk.eyJ1Ijoic2h0ZXZldG0iLCJhIjoiY2syM2V5c2huMHdiazNmcWMzbHd3ZXl5ZiJ9.rnLws1iCGFFsUGsted9fRw
                                $.ajax({
                                    url: url,
                                    method: "GET"
                                }).then(function (response2, err) {
                                    if (err) {
                                        console.log(err)
                                    }
                                    for (var k = 1; k < response2.trips[0].legs.length; k++) {
                                        totalDist = totalDist += response2.trips[0].legs[k].distance;
                                    }
                                    totalDist = (totalDist * 0.000621371).toFixed(2);
                                    console.log("Total distance: " + totalDist + " Miles");
                                    $("#results").html("<input id='submitDB' type='submit' /><hr />")
                                    $("#results").prepend("<form> Please select a category for your trip: <select id='purpose' class='form-control'> <option>Work</option><option>Medical</option><option>Moving</option></select></form>");
                                    $("#results").prepend("<h1>Trip: " + totalDist + " Miles</h1>");
                                });
                            }, 2000)
                        })
                    };
                });
                $("#submitApi").remove();
    
            })};
    
        </script>
    </body>
    
    </html>
  )}}








    {/* // <div className="container">
    //   <div className="row">
    //     <div className="col-3"></div>
    //     <div className="col-6"><h1> Mileage</h1></div>
    //   </div>
    //   <div className="row">
    //     <div className="col-4"></div>
    //     <div className="col-4">
    //       <form>
    //         <select class="form-control form-control">
    //           <option>Work</option>
    //           <option>Medical</option>
    //           <option>Moving</option>
    //         </select>
    //       </form>
    //     </div>
    //   </div>
    //   <div>
    //     <button type="startTrip" className="btn btn-success">Start Trip</button>
    //     <button type="endTrip" className="btn btn-danger">End Trip</button>
    //   </div>
    // </div>
  );
} */}

export default Mileage;
