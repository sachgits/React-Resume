var Work = React.createClass({

  displayName: "Work",

  propTypes: {
      workData: React.PropTypes.object
  },

  componentDidMount: function() {
  },

  getWorkExperience: function() {
    console.log("getWorkExperience");
    console.log(this.props.workData);
    return React.createElement("div", null)
  },

  render: function() {
      return (
          React.createElement("div", {className: "work"}, this.getWorkExperience())
      )
  }

});
