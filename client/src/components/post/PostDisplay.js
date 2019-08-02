import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import Spinner from '../common/Spinner';
import { getPost } from '../../redux/actions/postActions';

class PostDisplay extends Component {
	componentDidMount() {
		this.props.getPost(this.props.match.params.id);
	}
	render() {
		const { post, loading } = this.props.post;
		let postContent;
		if (post === null || loading === true || Object.keys(post).length === 0) {
			postContent = <Spinner />;
		} else {
			postContent = (
				<div>
					<PostItem post={post} showActions={false} />
				</div>
			);
		}
		return (
			<div className="post">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<Link to="/feed" className="btn btn-light mb-3">
								Back to feed
							</Link>
							{postContent}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PostDisplay.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getPost })(PostDisplay);
