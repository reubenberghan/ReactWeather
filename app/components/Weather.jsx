'use strict';

var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');

var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function getInitialState () {
        return {
            isLoading: false
        };
    },
    handleSearch: function handleSearch (location) {
        // due to the dynamic nature of the `this` binding to the scope of the call site of the containing function
        // we set a `that` var to the `this` of `handleSearch` (which is our `Weather` component for `handleSearch`)
        // so that when we call `setState` in the fullfillment function inside the `then` below we can ensure it will be on the `Weather` component
        // with es6 we could just use an arrow function (lexically bound) which would ensure this for us
        var that = this;
        
        this.setState({
            isLoading: true,
            errorMessage: null
        });
        
        openWeatherMap.getTemp(location)
            .then(function fullfillTemp (temp) {
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                });
            }, function rejectTemp (e) {
                that.replaceState({
                   isLoading: false,
                   errorMessage: e.message
                });
            });
    },
    render: function renderWeather () {
        // es6 destructuring our `state` object for the necessary state vars
        var { isLoading, temp, location, errorMessage } = this.state;
        
        // since we only want to render a message once the user has entered something
        // we set up a function to handle the logic and render our message as required
        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={ temp } location={ location } />;
            }
        }
        
        function renderError () {
            if (typeof errorMessage == 'string') {
                return (
                    <ErrorModal message={ errorMessage } />
                );
            }
        }
        
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={ this.handleSearch } />
                { renderMessage() }
                { renderError() }
            </div>
        );
    }
});

module.exports = Weather;