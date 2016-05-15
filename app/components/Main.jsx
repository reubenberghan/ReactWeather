'use strict';

var React = require('react');
var Nav = require('Nav');

// using the `this.props.children` object we allow `react` and `react-router` to render the childern component of the respective route we want to access
// var Main = React.createClass({
//     render: function renderMain () {
//         return (
//             <div>
//                 <Nav />
//                 <h2>Main Component</h2>
//                 { this.props.children }
//             </div>
//         );
//     }
// });

// refactor to be a stateless functional component
// note that as `props` is passed in as a parameter we no longer use the `this` as we do above
var Main = props => {
    return (
        <div>
            <Nav />
            <h2>Main Component</h2>
            { props.children }
        </div>
    );
};

module.exports = Main;