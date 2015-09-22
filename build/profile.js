var Profile = React.createClass({

    displayName: "Profile",

    propTypes: {
		profileData: React.PropTypes.object
	},

    getInitialState: function() {
        return {
            profileObj: null
        }
    },

    componentDidMount: function() {
        console.log("mounted");
        this.setState({profileObj: this.props.profileData});
    },

    getProfileDetails: function() {
        console.log("getProfileDetails");
        // var profile = this.state.profileObj;
        // console.log(profile);
        return React.createElement("h1", null, this.state.profileObj)
    },

    render: function() {
        if (this.state.profileObj !== null) {
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
