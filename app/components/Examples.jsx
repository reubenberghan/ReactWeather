'use strict';

var React = require('react');
var { Link } = require('react-router');

// using reacts new stateless functional components feature
// see `About.jsx` for more notes
var Examples = props => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Sydney">Sydney, NSW</Link>
                </li>
                <li>
                    <Link to="/?location=Wellington">Wellington, NZ</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;