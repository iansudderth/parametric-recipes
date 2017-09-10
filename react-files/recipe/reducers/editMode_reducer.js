import { NEW_RECIPE, CHANGE_RECIPE } from '../actions';

function editMode(state = false, action) {
	switch (action.type) {
		case NEW_RECIPE: {
			return true;
		}
		case CHANGE_RECIPE: {
			return false;
		}
		default:
			return state;
	}
}

export default editMode;
