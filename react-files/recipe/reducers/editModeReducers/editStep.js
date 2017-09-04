import _ from 'lodash';
import { NEW_STEP, EDIT_STEP, DELETE_STEP, REORDER_STEP } from '../../actions';

export default function editStepReducer(state, action) {
	let newState;
	switch (action.type) {
		case EDIT_STEP: {
			const { sectionIndex, stepIndex, newText } = action.payload;
			newState = _.merge({}, state);
			newState.recipe[sectionIndex].procedure[stepIndex] = newText;
			return newState;
		}
		case NEW_STEP: {
			const { sectionIndex } = action.payload;
			newState = _.merge({}, state);
			newState.recipe[sectionIndex].procedure = [
				...newState.recipe[sectionIndex].procedure,
				'New Step',
			];
			return newState;
		}
		default:
			return state;
	}
}
