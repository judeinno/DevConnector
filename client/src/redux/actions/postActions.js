import axios from 'axios';
import { ADD_POST, GET_ERRORS, GET_POSTS, POST_LOADING, DELETE_POST, GET_POST } from '../types';

// Add Post
export const addPost = postData => dispatch => {
	axios
		.post('/api/posts', postData)
		.then(res =>
			dispatch({
				type: ADD_POST,
				payload: res.data
			})
		)
		.catch(error =>
			dispatch({
				type: GET_ERRORS,
				payload: error.response.data
			})
		);
};

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
	axios
		.post(`/api/posts/comment/${postId}`, commentData)
		.then(res =>
			dispatch({
				type: GET_POST,
				payload: res.data
			})
		)
		.catch(error =>
			dispatch({
				type: GET_ERRORS,
				payload: error.response.data
			})
		);
};

// Get Posts
export const getPosts = () => dispatch => {
	dispatch(setPostsLoading());
	axios
		.get('/api/posts')
		.then(res =>
			dispatch({
				type: GET_POSTS,
				payload: res.data
			})
		)
		.catch(error =>
			dispatch({
				type: GET_POSTS,
				payload: null
			})
		);
};

// Get Posts
export const getPost = (id) => dispatch => {
	dispatch(setPostsLoading());
	axios
		.get(`/api/posts/${id}`)
		.then(res =>
			dispatch({
				type: GET_POST,
				payload: res.data
			})
		)
		.catch(error =>
			dispatch({
				type: GET_POST,
				payload: null
			})
		);
};

// Delete post
export const deletePost = id => dispatch => {
	axios
		.delete(`/api/posts/${id}`)
		.then(res =>
			dispatch({
				type: DELETE_POST,
				payload: id
			})
		)
		.catch(error =>
			dispatch({
				type: GET_ERRORS,
				payload: error.response.data
			})
		);
};

//Add Like
export const addLike = id => dispatch => {
	axios
		.post(`/api/posts/like/${id}`)
		.then(res =>
			dispatch(getPosts()))
		.catch(error =>
			dispatch({
				type: GET_ERRORS,
				payload: error.response.data
			})
		);
};

//Remove  Like
export const removeLike = id => dispatch => {
	axios
		.post(`/api/posts/unlike/${id}`)
		.then(res =>
			dispatch(getPosts()))
		.catch(error =>
			dispatch({
				type: GET_ERRORS,
				payload: error.response.data
			})
		);
};

//Set Posts loading
export const setPostsLoading = () => {
	return {
		type: POST_LOADING
	};
};
