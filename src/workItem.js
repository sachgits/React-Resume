var WorkItem = React.createClass({

  displayName: "WorkItem",

  propTypes: {
      workItemData: React.PropTypes.object
  },

  getWorkDates: function() {
    var startdate = moment(this.props.workItemData.startDate).format("MMM, YYYY");
    var enddate;
    if (this.props.workItemData.endDate !== "") {
      enddate = moment(this.props.workItemData.endDate).format("MMM, YYYY");
    }else{
      enddate = "Present";
    }

    return <span class="startdate">{startdate} - {enddate}</span>
  },

  render: function() {
      return (
          <div className="workItem">
            <h3>{this.props.workItemData.position}, <span>{this.props.workItemData.company}</span></h3>
            <p class="workDates">{this.getWorkDates()}</p>
          </div>
      )
  }

});
