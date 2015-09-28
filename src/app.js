var Resume = React.createClass({

    displayName: "Resume",

    getInitialState: function() {
        return {
            jsonObj: null
        }
    },

    componentDidMount: function() {
      $.get(this.props.source, function(result) {
        if (this.isMounted()) {
    			// this.setState({jsonObj: JSON.parse(result)});
    			this.setState({jsonObj: result});
        }
  		}.bind(this));
  	},

    render: function() {
        if (this.state.jsonObj) {
          // console.log(this.state.jsonObj.basics);
          var profile = this.state.jsonObj.basics;
          var about = profile.summary;
          var work = this.state.jsonObj.work;
          var education = this.state.jsonObj.education;
          var skills = this.state.jsonObj.skills;
          return (
              <div>
                <Profile profileData={profile} />
                <About aboutData={about} />
                <Work workData={work} />
                <Education educationData={education} />
                <Skills skillsData={skills} />
              </div>
          )
        }else{
          return <p>Loading</p>
        }
    }
});

React.render(
  <Resume source="resume.json" />,
  document.getElementById('reactjson')
);
