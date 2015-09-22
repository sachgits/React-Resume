var About = React.createClass({

  displayName: "About",

  propTypes: {
      aboutData: React.PropTypes.object
  },

  render: function() {
      return (
          React.createElement("div", {className: "about"}, this.props.aboutData)
      )
  }

});
