import { CHANGE_SCALING_FACTOR } from '../actions/index';

function scalingFactor(state = 1, action) {
	switch (action.type) {
		case CHANGE_SCALING_FACTOR:
			return action.payload;
		default:
			return state;
	}
}

export default scalingFactor;
