'use strict';

var React = require('react');

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

// to create a stateless functional component we essentially use a function expression
// that contains the same code as the `render` method would in a traditional react component
var About = props => {
    return (
        <div>
            <h3>About</h3>
            <p>Welcome to the about page!</p>
        </div>
    );
};

module.exports = About;