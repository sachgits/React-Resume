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
        if (this.isMounted()) {
    			this.setState({jsonObj: result});
        }
  		}.bind(this));
  	},

    render: function() {
        if (this.state.jsonObj) {
          // console.log(this.state.jsonObj.basics);
          var profile = this.state.jsonObj.basics;
          return (
              React.createElement("div", null, 
                React.createElement(Profile, {profileData: profile}), 
                React.createElement(About, {aboutData: profile.summary})
              )
          )
        }else{
          return React.createElement("p", null, "Loading")
        }
    }
});

React.render(
  React.createElement(Resume, {source: "resume.json"}),
  document.getElementById('reactjson')
);
