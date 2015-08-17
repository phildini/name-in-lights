var React = require('react'),
    Backers = require('./components/Backers');

var App = React.createClass({
    handleScoreBump: function(amount) {
        var cash = this.state.cash;
        cash = cash + amount;
        this.setState({cash: cash});
    },
    getInitialState: function() {
        return {cash: 0};
    },
    render: function() {
        return(
            <div>
                <h1>Cash: ${this.state.cash}</h1>
                <Backers.backerButton onClick={this.handleScoreBump} />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));