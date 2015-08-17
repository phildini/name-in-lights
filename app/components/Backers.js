'use strict'

var React = require('react');

var BackerButton = React.createClass({
    componentWillMount: function() {
        this.intervals = [];
    },
    setInterval: function() {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function() {
        this.intervals.map(clearInterval);
    },
    handleButtonClick: function() {
        if (this.state.seconds <= 0) {
            this.props.onClick(10);
            this.setState({seconds: 5});
        }
    },
    getInitialState: function() {
        return {
            seconds: 0
        };
    },
    componentDidMount: function() {
        this.setInterval(this.tick, 1000);
    },
    tick: function() {
        if (this.state.seconds > 0) {
            this.setState({seconds: this.state.seconds - 1});
        }
    },
    render: function(){
        var status;
        if (this.state.seconds > 0) {
            status = <p>Ready in {this.state.seconds} seconds.</p>;
        } else {
            status = <p>Woo away!</p>;
        }
        return (
            <div>
                {status}
                <button onClick={this.handleButtonClick}>Woo your backers. ($10)</button>
            </div>
        )
  }
});

module.exports = {
    'backerButton': BackerButton,
}