var Work = React.createClass({

  displayName: "Work",

  propTypes: {
      workData: React.PropTypes.object
  },

  componentDidMount: function() {
  },

  getWorkExperience: function() {
    // console.log("getWorkExperience");
    // console.log(this.props.workData);
    var workItems = [];
    $.each(this.props.workData, function(i, val) {
      console.log(val);
      workItems.push(<WorkItem workItemData={val}/>);
    });
    return workItems;
  },

  render: function() {
      return (
          <div className="work"><h2>Work experience</h2>{this.getWorkExperience()}</div>
      )
  }

});
