var Resume = React.createClass({

    displayName: "App",

    getInitialState: function() {
        return {
            jsonObj: null
        }
    },

    componentDidMount: function() {
		$.get(this.props.source, function(result) {
			// console.log(result);
			this.setState({jsonObj: $.parseJSON(result)});
		}.bind(this));
	},

    render: function() {
        if (this.state.jsonObj) {
            console.log(this.state.jsonObj.basics);
            var profile = this.state.jsonObj.basics;
        }
        return (
            React.createElement(Profile, {profileData: profile})
        )
    }
});

React.render(
  React.createElement(Resume, {source: "resume.json"}),
  document.getElementById('reactjson')
);
