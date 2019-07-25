import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileHeader from './ProfileHeader';
import ProfileCreds from './ProfileCreds';
import ProfileGitHub from './ProfileGitHub';
import ProfileAbout from './ProfileAbout';
// import Spinner from '../common/Spinner';
import { getProfileByHandle } from '../../redux/actions/profileActions';

class Profile extends Component {
	componentDidMount() {
		if (this.props.match.params.handle) {
			this.props.getProfileByHandle(this.props.match.params.handle);
		}
	}
	render() {
		return (
    <div>
      <ProfileHeader />
      <ProfileAbout />
      <ProfileCreds />
      <ProfileGitHub />
    </div>);
	}
}

Profile.propTypes = {
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
