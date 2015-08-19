'use strict'

var React = require('react');

var SceneStage = React.createClass({
    render: function() {
        var actionNodes = this.props.actions.map(function (action) {
            return(<li>{action}</li>);
        })
        return(<ul>{actionNodes}</ul>);
    }
});

module.exports = {
    'sceneStage': SceneStage,
}