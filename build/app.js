var Resume = React.createClass({

    displayName: "App",

    getInitialState: function() {
        return {
            jsonObj: null
        }
    },

    componentDidMount: function() {
  		$.get(this.props.source, function(result) {
        if (this.isMounted()) {
    			this.setState({jsonObj: JSON.parse(result)});
        }
  		}.bind(this));
  	},

    render: function() {
        if (this.state.jsonObj) {
          console.log(this.state.jsonObj.basics);
          var profile = this.state.jsonObj.basics;
          var about = profile.summary;
          var work = this.state.jsonObj.work;
          return (
              React.createElement("div", null, 
                React.createElement(Profile, {profileData: profile}), 
                React.createElement(About, {aboutData: about}), 
                React.createElement(Work, {workData: work})
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
