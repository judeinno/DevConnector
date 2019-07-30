import axios from 'axios';
import { ADD_POST, GET_ERRORS, GET_POSTS, POST_LOADING } from '../types';

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

// Get Post
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

//Set Posts loading
export const setPostsLoading = () => {
	return {
		type: POST_LOADING
	};
};
