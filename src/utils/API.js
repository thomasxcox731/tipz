import axios from 'axios';
import mysql from 'mysql';

//SEQUELIZE

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