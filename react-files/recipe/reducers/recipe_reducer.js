import { CHANGE_RECIPE } from '../actions';

import potatoSaladRecipe from '../recipes/potatoSalad';
import tamales from '../recipes/tamales';
import tunaConfit from '../recipes/tunaConfit';

function recipe(state = tamales, action) {
	switch (action.type) {
		case CHANGE_RECIPE:
			switch (action.payload) {
				case 'potato salad':
					return potatoSaladRecipe;
				case 'tamales':
					return tamales;
				case 'tuna confit':
					return tunaConfit;
				default:
					return tamales;
			}
		default:
			return state;
	}
}

export default recipe;
