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
    return <div></div>
  },

  render: function() {
      return (
          <div className="work">{this.getWorkExperience()}</div>
      )
  }

});
