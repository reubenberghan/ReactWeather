'use strict';

var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function onFormSubmit (e) {
        e.preventDefault();
        
        var location = this.refs.location.value;
        
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);   
        }
    },
    render: function renderWeatherForm () {
        return (
            <div>
                <form onSubmit={ this.onFormSubmit }>
                    <div>
                        <input type="text" ref="location" placeholder="Enter city name" />
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;