'use strict';

var React = require('react');

// using stateless functional components feature
// also note we are now using destructuring to assign `temp` and `location`
// as they are passed to our function rather than having an extra line of code
var WeatherMessage = ({ temp, location }) => {
    return (
        <div>
            <h3 className="text-center">It's { temp } in { location }.</h3>
        </div>
    );
};

module.exports = WeatherMessage;