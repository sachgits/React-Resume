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
          var work = this.state.jsonObj.work;
          return (
              <div>
                <Profile profileData={profile} />
                <About aboutData={profile.summary} />
                <Work workData={work} />
              </div>
          )
        }else{
          return <p>Loading</p>
        }
    }
});

React.render(
  React.createElement(Resume, {source: "resume.json"}),
  document.getElementById('reactjson')
);
