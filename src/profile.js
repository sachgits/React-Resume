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
        return <h1>{this.state.profileObj}</h1>
    },

    render: function() {
        if (this.state.profileObj !== null) {
            console.log("request getProfileDetails");
            return (
                <div className="profile">{this.getProfileDetails()}</div>
            )
        }else{
            return (
                <p>Loading</p>
            )
        }
    }
});
