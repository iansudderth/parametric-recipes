import { NEW_RECIPE, CHANGE_RECIPE, PUBLISH_RECIPE_SUCCESS } from '../actions';

function editMode(state = false, action) {
  switch (action.type) {
    case NEW_RECIPE: {
      return true;
    }
    case CHANGE_RECIPE: {
      return false;
    }
    case PUBLISH_RECIPE_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
}

export default editMode;
