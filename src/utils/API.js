import axios from 'axios';
// import mysql from 'mysql';

//SEQUELIZE


// var mysql = require("mysql");

// Initializes the connection variable to sync with a MySQL database

// if (username !=== this.)


// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "qwerty00",
//     database: [usernamedb]
// });
// var ip = "https://maps.googleapis.com/maps/api/geocode/json?address=" + startStreet + ",+" + startCity + ",+" + startState + "&sensor=false&key=" + apiKey;
// Ajax call for to convert address to lat/long
// return axios.get(ip)
//     .then(function (response) {
//         console.log(response)
//     })


// get props 

export default {
    // Gets all books
    getData: function () {
        return axios.get("/api/userdata");
    },

    // Saves a book to the database
    postMileage: function (mileageData) {
        return axios.post("/api/userdata", mileageData);
    },
    
    postTips: function (tipsData) {
        return axios.post("/api/userdata", tipsData);
    }
};