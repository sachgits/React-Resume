var Skills = React.createClass({

  displayName: "Skills",

  propTypes: {
      skillsData: React.PropTypes.object
  },

  componentWillMount() {
    this.setState({'keywords':this.props.skillsData[0].keywords});
  },

  render: function() {
    
    var getSkills = this.state.keywords.map(function(item) {
      return (<li>{item}</li>)
    });

  	return (
  	  <div className="skills"><h2>Skills</h2><ul>{getSkills}</ul></div>
  	)
  }

});
