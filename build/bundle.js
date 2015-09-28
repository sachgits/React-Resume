"use strict";

var About = React.createClass({

  displayName: "About",

  propTypes: {
    aboutData: React.PropTypes.object
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "about" },
      this.props.aboutData
    );
  }

});
"use strict";

var Resume = React.createClass({

    displayName: "App",

    getInitialState: function getInitialState() {
        return {
            jsonObj: null
        };
    },

    componentDidMount: function componentDidMount() {
        $.get(this.props.source, (function (result) {
            if (this.isMounted()) {
                this.setState({ jsonObj: JSON.parse(result) });
            }
        }).bind(this));
    },

    render: function render() {
        if (this.state.jsonObj) {
            // console.log(this.state.jsonObj.basics);
            var profile = this.state.jsonObj.basics;
            var about = profile.summary;
            var work = this.state.jsonObj.work;
            var education = this.state.jsonObj.education;
            var skills = this.state.jsonObj.skills;
            return React.createElement(
                "div",
                null,
                React.createElement(Profile, { profileData: profile }),
                React.createElement(About, { aboutData: about }),
                React.createElement(Work, { workData: work }),
                React.createElement(Education, { educationData: education }),
                React.createElement(Skills, { skillsData: skills })
            );
        } else {
            return React.createElement(
                "p",
                null,
                "Loading"
            );
        }
    }
});

React.render(React.createElement(Resume, { source: resume.json }), document.getElementById('reactjson'));
"use strict";

var Education = React.createClass({

  displayName: "Education",

  propTypes: {
    educationData: React.PropTypes.object
  },

  render: function render() {
    getEducation = this.props.educationData.map(function (item) {
      var startdate = moment(item.startDate).format("MMM, YYYY");
      var enddate = moment(item.endDate).format("MMM, YYYY");
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          item.studyType,
          " ",
          item.area
        ),
        React.createElement(
          "h4",
          null,
          item.institution
        ),
        React.createElement(
          "p",
          null,
          "Studied: ",
          startdate,
          " - ",
          enddate
        )
      );
    });
    return React.createElement(
      "div",
      { className: "education" },
      React.createElement(
        "h2",
        null,
        "Education"
      ),
      getEducation
    );
  }

});
"use strict";

var Profile = React.createClass({

    displayName: "Profile",

    propTypes: {
        profileData: React.PropTypes.object
    },

    getProfileDetails: function getProfileDetails() {
        // console.log("getProfileDetails");
        var profile = this.props.profileData;
        // console.log(profile);
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "profileImg" },
                React.createElement("img", { src: profile.picture, width: "200" })
            ),
            React.createElement(
                "h1",
                null,
                profile.name
            ),
            React.createElement(
                "h2",
                null,
                profile.label
            ),
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    profile.location.city,
                    ", ",
                    profile.location.region,
                    ", ",
                    profile.location.countryCode
                ),
                React.createElement(
                    "li",
                    null,
                    profile.phone
                ),
                React.createElement(
                    "li",
                    null,
                    profile.email
                )
            ),
            React.createElement(
                "ul",
                { className: "profileLinks" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: 'https://twitter.com/' + profile.profiles[0].username },
                        profile.profiles[0].network
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: 'https://github.com/' + profile.profiles[1].username },
                        profile.profiles[1].network
                    )
                )
            )
        );
    },

    render: function render() {
        if (this.props.profileData !== null) {
            // console.log("request getProfileDetails");
            return React.createElement(
                "div",
                { className: "profile" },
                this.getProfileDetails()
            );
        } else {
            return React.createElement(
                "p",
                null,
                "Loading"
            );
        }
    }
});
"use strict";

var Skills = React.createClass({

  displayName: "Skills",

  propTypes: {
    skillsData: React.PropTypes.object
  },

  render: function render() {
    getEducation = this.props.skillsData.map(function (item) {
      return React.createElement(
        "li",
        null,
        item.keywords
      );
    });
    return React.createElement(
      "div",
      { className: "skills" },
      React.createElement(
        "h2",
        null,
        "Skills"
      ),
      React.createElement(
        "ul",
        null,
        getSkills
      )
    );
  }

});
"use strict";

var Work = React.createClass({

  displayName: "Work",

  propTypes: {
    workData: React.PropTypes.object
  },

  getWorkExperience: function getWorkExperience() {
    // console.log("getWorkExperience");
    // console.log(this.props.workData);
    var workItems = [];
    $.each(this.props.workData, function (i, val) {
      // console.log(val);
      workItems.push(React.createElement(WorkItem, { workItemData: val }));
    });
    return workItems;
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "work" },
      React.createElement(
        "h2",
        null,
        "Work experience"
      ),
      this.getWorkExperience()
    );
  }

});
"use strict";

var WorkItem = React.createClass({

  displayName: "WorkItem",

  propTypes: {
    workItemData: React.PropTypes.object
  },

  getWorkDates: function getWorkDates() {
    var startdate = moment(this.props.workItemData.startDate).format("MMM, YYYY");
    var enddate;
    if (this.props.workItemData.endDate !== "") {
      console.log(this.props.workItemData.endDate);
      enddate = moment(this.props.workItemData.endDate).format("MMM, YYYY");
      console.log('enddate ' + enddate);
    } else {
      enddate = "Present";
    }

    return React.createElement(
      "span",
      { "class": "startdate" },
      startdate,
      " - ",
      enddate
    );
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "workItem" },
      React.createElement(
        "h3",
        null,
        this.props.workItemData.position,
        ", ",
        React.createElement(
          "span",
          null,
          this.props.workItemData.company
        )
      ),
      React.createElement(
        "p",
        { "class": "workDates" },
        this.getWorkDates()
      )
    );
  }

});
