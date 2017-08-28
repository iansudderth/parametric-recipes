import { combineReducers } from 'redux';
import scalingFactor from './scalingFactor_reducer';
import recipe from './recipe_reducer';

const rootReducer = combineReducers({
	scalingFactor,
	recipe,
});

export default rootReducer;
