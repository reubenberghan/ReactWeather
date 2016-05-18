'use strict';

var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function getDefaultPropsErrorModal () {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    // as modals are hidden by default our component still will not show once the `render` method is called
    // so we need to use a component lifecycle method `componentDidMount`
    // this method gets called after the `render` method (as opposed to `componentWillMount` which gets called before `render`)
    // and to initialise the modal we need to create a new instance and invoke it
    // i.e. perform some javascript on the markup once it is in the DOM (rendered)
    // which is where the lifecycle component `componentDidMount` comes in
    componentDidMount: function componentDidMountErrorModal () {
        
        // create a new instance of our modal using the markup below
        var modal = new Foundation.Reveal($('#error-modal'));
        
        // explicitly open the modal
        modal.open();
    },
    // if we do not set a value for an attribute (i.e. do not set it equal to something) react by default assigns a boolean value of `true`
    // whereas traditionally in the DOM of a browser if an element has an attribute without the `="blah"` its value will be an empty string
    // and in this case foundation is not expecting our `data-close` attribute to have a value so we get an error if it does
    // which is what happens if we do not set the value in our jsx to what foundation is expecting, an empty string
    // basically when adding attributes in react and jsx if you would expect them to have no value in the DOM
    // this has to be set explicitly by adding the `=""`
    render: function renderErrorModal () {
        var { title, message } = this.props;
        
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{ title }</h4>
                <p>{ message }</p>
                <p>
                    <button className="button hollow" data-close="">Close</button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;