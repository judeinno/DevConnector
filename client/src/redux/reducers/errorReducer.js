import { GET_ERRORS, CLEAR_ERRORS } from '../types';

const initalState = {};

export default (state = initalState, action) => {
	switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
		default:
			return state;
	}
};
