'use strict';

// external modules
var React = require('react');
var ReactDOM = require('react-dom');

// using es6s destructuring feature to pull out all the required variables from the `react-route` module
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// our own components/modules
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation css
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// the `IndexRoute` component lets `react` know which component is our default (index) route to render
// we then nest further `Route` components to define the components we want rendered at which route
ReactDOM.render(
    <Router history={ hashHistory }>
        <Route path="/" component={ Main }>
            <Route path="about" component={ About } />
            <Route path="examples" component={ Examples } />
            <IndexRoute component={ Weather } />
        </Route>
    </Router>,
    document.getElementById('app')
);