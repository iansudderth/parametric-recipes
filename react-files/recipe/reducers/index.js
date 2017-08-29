import { combineReducers } from 'redux';
import scalingFactor from './scalingFactor_reducer';
import recipe from './recipe_reducer';
import recipeList from './recipeList_reducer';

const rootReducer = combineReducers({
	scalingFactor,
	recipe,
	recipeList,
});

export default rootReducer;
