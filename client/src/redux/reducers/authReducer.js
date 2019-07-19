import { SET_CURRENT_USER } from '../types'
import isEmpty from '../../validation/is-empty';

const initalState = {
	isAuthenticated: false,
	user: {}
};

export default (state = initalState, action) => {
	switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
		default:
			return state;
	}
};
