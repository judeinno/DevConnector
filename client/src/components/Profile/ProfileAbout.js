import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
	render() {
		const { profile } = this.props;
		const skills = profile.skills.map((skill, index) => (
			<div key={index} class="p-3">
				<i class="fa fa-check" /> {skill}
			</div>
		));
		return (
			<div class="row">
				<div class="col-md-12">
					<div class="card card-body bg-light mb-3">
						<h3 class="text-center text-info">{profile.handle}'s Bio</h3>
						{isEmpty(profile.bio) ? (
							<span>{profile.handle} has no bio</span>
						) : (
							<p class="lead">{profile.bio}</p>
						)}
						<hr />
						<h3 class="text-center text-info">Skill Set</h3>
						<div class="row">
							<div class="d-flex flex-wrap justify-content-center align-items-center">
								{skills}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileAbout;
