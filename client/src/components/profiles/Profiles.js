import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getProfiles } from '../../redux/actions/profileActions';

class Profiles extends Component {
	componentDidMount() {
		this.props.getProfiles();
	}
	render() {
		const { profiles, loading } = this.props.profile;

		let profileItems;
		if (profiles === null || loading === true) {
			profileItems = <Spinner />;
		} else {
			if (profiles.length > 0) {
				profileItems = <h1>Profiles here</h1>;
			} else {
				profileItems = <h4>No profiles found...</h4>;
			}
		}
		return (
			<div className="profiles">
				<div className="container">
					<div className="row">
						<div className="col-md-12 m-auto">
							<h1 className="display-4 text-center">Developer Profiles</h1>
							<p className="lead text-center">
								Browse and connect with developers
							</p>
							{profileItems}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Profiles.propTypes = {
	profile: PropTypes.object.isRequired,
	getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
