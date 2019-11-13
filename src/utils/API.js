import $ from "jquery";
// import axios from 'axios';
import {Mileage, startStreet, startCity, startState} from "../Components/pages/Mileage/Mileage";

var stopsArr = [];
var dropdownValReact = "";
var route = ""
var totalDist = 0
var apiKey = "AIzaSyCHZqKS_YadIq4eOAtVad2cxcHixlT6poI"

// $("#results").html("<h1>WORKING...<hr>")
// startStreet = startStreet.split(" ").join("+");
// startCity = startCity.split(" ").join("+");
// startState = startState.split(" ").join("+");

export default {
    // Start Location
    getCoords: function (dropdownVal) {
        dropdownValReact = dropdownVal;




    //     var ip = "https://maps.googleapis.com/maps/api/geocode/json?address=" + startStreet + ",+" + startCity + ",+" + startState + "&sensor=false&key=" + apiKey;
    //     // Ajax call for to convert address to lat/long
    //     return axios.get(ip)
    //         .then(function (response) {
    //             var addr = response.results[0].formatted_address;
    //             var lat = response.results[0].geometry.location.lat;
    //             var long = response.results[0].geometry.location.lng;
    //             var coords = long + "," + lat + ";";
    //             // push lat/long to 'stopsArr' array.
    //             stopsArr.push(coords);
    //             console.log("START: \n" + addr + "\n" + lat + ", " + long);
    //         })
    //         .then(function () {
    //             // *********** STOPS API ************* //
    //             for (var i = 1; i <= Mileage.dropdownVal; i++) {
    //                 var apiAddress = (($('#street' + i).val()).split(" ").join("+")) + ",+" + (($('#city' + i).val()).split(" ").join("+")) + ",+" + $('#state' + i).val();
    //                 // console.log(apiAddress);
    //                 var ip2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + apiAddress + "&sensor=false&key=" + apiKey;
    //                 return axios.get(ip2)
    //                     .then(function (response) {
    //                         // var addr = response.results[0].formatted_address;
    //                         var lat = response.results[0].geometry.location.lat;
    //                         var long = response.results[0].geometry.location.lng;
    //                         var coords = long + "," + lat + ";";
    //                         stopsArr.push(coords);
    //                     });
    //             }
    //         }).then(function () {
    //             route = stopsArr.toString();
    //             setTimeout(() => {
    //                 route = route.replace(";,", ";");
    //                 route = route.slice(0, -1);

    //                 // route = route.replace(";,", ";")
    //                 var url = "https://api.mapbox.com/optimized-trips/v1/mapbox/driving/" + route + "?access_token=pk.eyJ1Ijoic2h0ZXZldG0iLCJhIjoiY2syM2V5c2huMHdiazNmcWMzbHd3ZXl5ZiJ9.rnLws1iCGFFsUGsted9fRw"
    //                 // https://api.mapbox.com/optimized-trips/v1/mapbox/driving/-122.42,37.78;-122.45,37.91;-122.48,37.73?annotations=distance        &access_token=pk.eyJ1Ijoic2h0ZXZldG0iLCJhIjoiY2syM2V5c2huMHdiazNmcWMzbHd3ZXl5ZiJ9.rnLws1iCGFFsUGsted9fRw
    //                 // https://api.mapbox.com/optimized-trips/v1/mapbox/driving/-119.4179324,36.778261;-99.9018131,31.9685988;-118.2436849,34.0522342?access_token=pk.eyJ1Ijoic2h0ZXZldG0iLCJhIjoiY2syM2V5c2huMHdiazNmcWMzbHd3ZXl5ZiJ9.rnLws1iCGFFsUGsted9fRw
    //                 return axios.get(url)
    //                     .then(function (response3, err) {
    //                         if (err) {
    //                             console.log(err)
    //                         }
    //                         for (var k = 1; k < response3.trips[0].legs.length; k++) {
    //                             totalDist = totalDist += response3.trips[0].legs[k].distance;
    //                         }
    //                         totalDist = (totalDist * 0.000621371).toFixed(2);
    //                         console.log("Total distance: " + totalDist + " Miles");
    //                         $("#results").html("<input id='submitDB' type='submit'></div><hr>")
    //                         $("#results").prepend("<form> Please select a category for your trip: <select id='purpose' class='form-control'> <option>Work</option><option>Medical</option><option>Moving</option></select></form>");
    //                         $("#results").prepend("<h1>Trip: " + totalDist + " Miles</h1>");
    //                     });
    //             }, 2000)
    //         })
    // }
}};