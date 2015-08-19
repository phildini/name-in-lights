'use strict'

var React = require('react');

var BackerButton = React.createClass({
    handleButtonClick: function() {
        this.props.onClick({
            actionName: 'backers',
            value: 10
        });
    },
    render: function() {
        return(
            <div>
            <button onClick={this.handleButtonClick}>Woo your backers. ($10)</button>
            </div>
        )
    }
});

module.exports = {
    'backerButton': BackerButton,
}