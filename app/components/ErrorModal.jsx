'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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
        
        // as we're now handling the render of the modal here we need the required `props` vars
        var { title, message } = this.props;
        
        // due to foundation manipulating the DOM
        // i.e. removing the modal markup when a user closes the modal
        // and because react wants to keep track of all the DOM elements it renders to manage state etc.
        // react throws an 'Invariant Violation' error if we render the modal with the traditional `render` method
        // then close it and try to re-render any child components in the same page
        // this means we want to add our modal markup seperately using `componentDidMount`
        // so we can control its lifecycle seperately from the other react components 
        var modalMarkup = (
             <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{ title }</h4>
                <p>{ message }</p>
                <p>
                    <button className="button hollow" data-close="">Close</button>
                </p>
            </div>
        );
        
        // using jQuery and the `ReactDOMServer.renderToString` method we can take the jsx of `modalMarkup`
        // and convert it to actual markup to be rendered by the browser
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        
        // now using jQuery and the `ReactDOM.findDOMNode` method we add the modal markup to the `ErrorModal` component in the DOM
        $(ReactDOM.findDOMNode(this)).html($modal);
        
        // create a new instance of our modal using foundation
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
        return (
           <div></div>
        );
    }
});

module.exports = ErrorModal;