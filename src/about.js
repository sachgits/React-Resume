var About = React.createClass({

  displayName: "About",

  propTypes: {
      aboutData: React.PropTypes.object
  },

  render: function() {
      return (
          <div className="about">{this.props.aboutData}</div>
      )
  }

});
