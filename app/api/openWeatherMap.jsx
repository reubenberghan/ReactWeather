'use strict';

// import axios which is a promise based HTTP client for the browser and node.js
var axios = require('axios');

// establish a constant for the URL of the open weather map api containing our api key and the units we want the temp in
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=de471f139abdebdeab0bdf4a5cd432e0&units=metric';

// getTemp takes a location string and appends this to the openweathermap api url before using axios to make a GET request 
// as axios returns a promise we can chain a `then` method to handle fulfillment and rejection
// however due to the nature of openweathermap's api (not promise based) a fulfillment may be a false positive
// this means we need to check for the combination of the `cod` and `message` properties on the returned JSON obj which indicates
// `then` will create and return a new promise which is then returned by `getTemp` and we can use to handle the response   
function getTemp (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${ OPEN_WEATHER_MAP_URL }&q=${ encodedLocation }`;
    
    return axios.get(requestUrl)
        .then(function fullfillment (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function rejection (res) {
            throw new Error(res.data.message);
        });
}

module.exports = {
    getTemp
};