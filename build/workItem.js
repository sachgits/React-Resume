var WorkItem = React.createClass({

  displayName: "WorkItem",

  propTypes: {
      workItemData: React.PropTypes.object
  },

  getWorkDates: function() {
    var startdate = moment(this.props.workItemData.startDate).format("MMM, YYYY");
    var enddate;
    if (this.props.workItemData.endDate !== "") {
      console.log(this.props.workItemData.endDate);
      enddate = moment(this.props.workItemData.endDate).format("MMM, YYYY");
      console.log('enddate '+enddate)
    }else{
      enddate = "Present";
    }
    
    return React.createElement("span", {class: "startdate"}, startdate, " - ", enddate)
  },

  render: function() {
      return (
          React.createElement("div", {className: "workItem"}, 
            React.createElement("h3", null, this.props.workItemData.position, ", ", React.createElement("span", null, this.props.workItemData.company)), 
            React.createElement("p", {class: "workDates"}, this.getWorkDates())
          )
      )
  }

});
