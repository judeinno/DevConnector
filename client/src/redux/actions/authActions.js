import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from '../types';
import setAuthToken from '../../utils/setAuthToken';

// Register User
export const registerUser = (userdata, history) => dispatch => {
	axios
		.post('/api/users/register', userdata)
		.then(res => history.push('/login'))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Set logged in user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// Login - get user token
export const loginUser = userdata => dispatch => {
	axios
		.post('/api/users/login', userdata)
		.then(res => {
			// save to local storage
			const { token } = res.data;
			// Set token to local storage
			localStorage.setItem('jwtToken', token);
			// set token to auth header
			setAuthToken(token);
			// Decode token to get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Log user out
export const logoutUser = () => dispatch => {
  // remove the token from local storage
  localStorage.removeItem('jwtToken');
  // Remove the auth header for future requests
  setAuthToken(false);
  // Set current user to {} which sets isAuthenticated to false
  dispatch(setCurrentUser({}));
}
