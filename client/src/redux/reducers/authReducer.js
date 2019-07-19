import { TEST_DISPATCH } from '../types';

const initalState = {
	isAuthenticated: false,
	user: {}
};

export default (state = initalState, action) => {
	switch (action.type) {
		case TEST_DISPATCH:
			return {
				...state,
				user: action.payload
			};
		default:
			return state;
	}
};
