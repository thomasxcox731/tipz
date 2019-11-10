// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3001;
// const opencage = require('opencage-api-client');
// require('dotenv').config();

var apiKey = "AIzaSyCHZqKS_YadIq4eOAtVad2cxcHixlT6poI"
var address = {
  street: "77290 Michigan Dr",
  city: "Palm Desert",
  state: "CA"
}
var ip = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address.street.split(" ").join("+") + ",+" + address.city.split(" ").join("+") + ",+" + address.state + "&sensor=false&key=" + apiKey;

// var ip = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=false&key=AIzaSyCHZqKS_YadIq4eOAtVad2cxcHixlT6poI"


$.ajax({
  url: ip,
  method: "GET"
}).then(function (response) {
console.log(response);
})






var url = "https://api.mapbox.com/optimized-trips/v1/mapbox/driving/-122.42,37.78;-122.45,37.91;-122.48,37.73?access_token=pk.eyJ1Ijoic2h0ZXZldG0iLCJhIjoiY2syM2V5c2huMHdiazNmcWMzbHd3ZXl5ZiJ9.rnLws1iCGFFsUGsted9fRw"

console.log(url);
console.log(ip);