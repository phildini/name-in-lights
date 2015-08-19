var React = require('react'),
    Actions = require('./components/Actions'),
    Areas = require('./components/Areas');

var App = React.createClass({
    handleAction: function(action) {
        if (this.state.actionsLeft > 0) {
            var actionsLeft = this.state.actionsLeft - 1;
            switch(action.actionName) {
                case 'backers':
                    var cash = this.state.cash + action.value,
                        actions = this.state.actions;
                    actions.push('Woo backers');
                    this.setState({
                        cash: cash,
                        actionsLeft: actionsLeft,
                        actions: actions,
                    });
            }
        }
    },
    handleSceneEnd: function() {
        var scene = this.state.scene,
            act = this.state.act;
        if (scene == 5) {
            scene = 1;
            act = act + 1;
        } else {
            scene = scene + 1;
        }
        this.setState({
            scene: scene,
            act: act,
        });
    },
    getInitialState: function() {
        return {
            cash: 0,
            act: 1,
            scene: 1,
            actionsLeft: 3,
            actions: [],
            lastActions: [],
        };
    },
    render: function() {
        return(
            <div>
                <h1>Cash: ${this.state.cash}</h1>
                <p>Act {this.state.act}, Scene {this.state.scene}</p>
                <div>
                    <p>Actions this scene:</p>
                    <Areas.sceneStage actions={this.state.actions} />
                </div>
                <Actions.backerButton onClick={this.handleAction} />
                <button onClick={this.handleSceneEnd}>End Scene</button>
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));