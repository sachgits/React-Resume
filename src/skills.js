var Skills = React.createClass({

  displayName: "Skills",

  propTypes: {
      skillsData: React.PropTypes.object
  },

  render: function() {
  	getEducation = 	this.props.skillsData.map(function(item) {
  		return <li>{item.keywords}</li>
  	});
	return (
	  <div className="skills"><h2>Skills</h2><ul>{getSkills}</ul></div>
	)
  }

});
