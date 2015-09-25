var Work = React.createClass({

  displayName: "Work",

  propTypes: {
      workData: React.PropTypes.object
  },

  getWorkExperience: function() {
    // console.log("getWorkExperience");
    // console.log(this.props.workData);
    var workItems = [];
    $.each(this.props.workData, function(i, val) {
      // console.log(val);
      workItems.push(React.createElement(WorkItem, {workItemData: val}));
    });
    return workItems;
  },

  render: function() {
      return (
          React.createElement("div", {className: "work"}, React.createElement("h2", null, "Work experience"), this.getWorkExperience())
      )
  }

});
