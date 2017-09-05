import _ from 'lodash';
import { NEW_SECTION, DELETE_SECTION, REORDER_SECTION } from '../../actions';

export default function editSectionReducer(state, action) {
	switch (action.type) {
		case NEW_SECTION: {
			let newState = _.merge({}, state);
			let newSection = {
				ingredients: [
					{ name: 'Ingredient Name', amount: 1, unit: 'g' },
				],
				procedure: ['Do something with something'],
			};
			newState.recipe = [...newState.recipe, newSection];
			return newState;
		}
		default:
			return state;
	}
}
