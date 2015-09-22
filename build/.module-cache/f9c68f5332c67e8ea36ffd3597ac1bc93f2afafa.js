var Resume = React.createClass({

    displayName: "App",

    getInitialState: function() {
        return {
            jsonObj: null
        }
    },

    componentDidMount: function() {
		$.get(this.props.source, function(result) {
			console.log(result);
			// this.setState({jsonObj: result});
		}.bind(this));
	},

    render: function() {
        return (
            React.createElement("p", null, "Hi")
        )
    }
});

React.render(
  React.createElement(Resume, {source: "resume.json"}),
  document.getElementById('reactjson')
);
