import { TEST_DISPATCH } from '../types';

// Register User
export const registerUser = userdata => {
	return {
		type: TEST_DISPATCH,
		payload: userdata
	};
};
