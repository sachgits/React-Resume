var About = React.createClass({

  displayName: "About",

  propTypes: {
      aboutData: React.PropTypes.object
  },

  render: function() {
      return (
          <div className="about"><h2>About</h2><div>{this.props.aboutData}</div></div>
      )
  }

});
