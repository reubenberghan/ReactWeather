'use strict';

var React = require('react');

// to create a stateless functional component we essentially use a function expression
// that contains the same code as the `render` method would in a traditional react component
var About = props => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built using React.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li><a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.</li>
                <li><a href="http://openweathermap.org">Open Weather Map</a> - Used to search for the weather data by city name.</li>
            </ul>
        </div>
    );
};

// a new feature in react is the ability to create stateless functional components
// these are components where we would only every need to have a `render` method
// an example is our `About` component below

// var About = React.createClass({
//     render: function renderAbout () {
//         return (
//             <div>
//                 <h3>About Component</h3>
//             </div>
//         );
//     }
// });

module.exports = About;