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
        var profile = this.state.profileObj;
        // console.log(profile);
        return  <div>
                  <div className="profileImg"><img src={profile.picture} width="200" /></div>
                  <h1>{profile.name}</h1>
                  <h2>{profile.label}</h2>
                  <ul>
                    <li>{profile.location.city}, {profile.location.region}, {profile.location.countryCode}</li>
                    <li>{profile.phone}</li>
                    <li>{profile.email}</li>
                  </ul>
                  <ul className="profileLinks">
                    <li><a href={'https://twitter.com/'+profile.profiles[0].username}>{profile.profiles[0].network}</a></li>
                    <li><a href={'https://github.com/'+profile.profiles[1].username}>{profile.profiles[1].network}</a></li>
                  </ul>
                </div>
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
