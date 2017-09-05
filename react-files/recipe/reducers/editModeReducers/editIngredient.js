import _ from 'lodash';
import {
	NEW_INGREDIENT,
	DELETE_INGREDIENT,
	EDIT_INGREDIENT_NAME,
	EDIT_SERVING_AMOUNT,
	EDIT_INGREDIENT_UNIT,
	REORDER_INGREDIENT,
} from '../../actions';

export default function editIngredientReducer(state, action) {
	switch (action.type) {
		case NEW_INGREDIENT: {
			const { sectionIndex } = action.payload;
			let newState = _.merge({}, state);
			newState.recipe[sectionIndex].ingredients = [
				...newState.recipe[sectionIndex].ingredients,
				{ name: 'New Ingredient', amount: 1, unit: 'g' },
			];
			return newState;
		}
		case DELETE_INGREDIENT: {
			const { sectionIndex, ingredientIndex } = action.payload;
			let newState = _.merge({}, state);
			let sectionIngredients = newState.recipe[sectionIndex].ingredients;
			_.pullAt(sectionIngredients, ingredientIndex);
			newState.recipe[sectionIndex].ingredients = [...sectionIngredients];
			return newState;
		}
		default:
			return state;
	}
}
