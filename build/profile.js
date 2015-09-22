var Profile = React.createClass({

    displayName: "Profile",

    propTypes: {
		    profileData: React.PropTypes.object
	  },

    getProfileDetails: function() {
        console.log("getProfileDetails");
        var profile = this.props.profileData;
        // console.log(profile);
        return  React.createElement("div", null, 
                  React.createElement("div", {className: "profileImg"}, React.createElement("img", {src: profile.picture, width: "200"})), 
                  React.createElement("h1", null, profile.name), 
                  React.createElement("h2", null, profile.label), 
                  React.createElement("ul", null, 
                    React.createElement("li", null, profile.location.city, ", ", profile.location.region, ", ", profile.location.countryCode), 
                    React.createElement("li", null, profile.phone), 
                    React.createElement("li", null, profile.email)
                  ), 
                  React.createElement("ul", {className: "profileLinks"}, 
                    React.createElement("li", null, React.createElement("a", {href: 'https://twitter.com/'+profile.profiles[0].username}, profile.profiles[0].network)), 
                    React.createElement("li", null, React.createElement("a", {href: 'https://github.com/'+profile.profiles[1].username}, profile.profiles[1].network))
                  )
                )
    },

    render: function() {
        if (this.props.profileData !== null) {
            console.log("request getProfileDetails");
            return (
                React.createElement("div", {className: "profile"}, this.getProfileDetails())
            )
        }else{
            return (
                React.createElement("p", null, "Loading")
            )
        }
    }
});
