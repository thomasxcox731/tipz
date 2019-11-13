import $ from "jquery";
import Mileage from "../Components/pages/Mileage/Mileage"
    
var apiKey = "AIzaSyCHZqKS_YadIq4eOAtVad2cxcHixlT6poI"
$("#results").html("<h1>WORKING...<hr>")



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
                var addr = response.results[0].formatted_address;
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
                    url2 = url.replace(";,", ";");
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
                        $("#results").html("<input id='submitDB' type='submit'></div><hr>")
                        $("#results").prepend("<form> Please select a category for your trip: <select id='purpose' class='form-control'> <option>Work</option><option>Medical</option><option>Moving</option></select></form>");
                        $("#results").prepend("<h1>Trip: " + totalDist + " Miles</h1>");
                    });
                }, 2000)
            })
        };
    });
    $("#submitApi").remove();

    export default API;