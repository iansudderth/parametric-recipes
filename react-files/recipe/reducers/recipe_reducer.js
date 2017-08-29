import { CHANGE_RECIPE } from '../actions';

import potatoSaladRecipe from '../recipes/potatoSalad';
import tamales from '../recipes/tamales';
import tunaConfit from '../recipes/tunaConfit';

function recipe(state = null, action) {
	switch (action.type) {
		case CHANGE_RECIPE:
			switch (action.payload) {
				case null:
					return state;
				default:
					return action.payload;
			}
		default:
			return state;
	}
}

export default recipe;
