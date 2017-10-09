import {
  NEW_RECIPE,
  CHANGE_RECIPE,
  PUBLISH_RECIPE_SUCCESS,
  RECIPE_LOGIN_SUCCESS,
  EDIT_AUTH_STATUS_SUCCESS,
} from '../actions';

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
    case RECIPE_LOGIN_SUCCESS: {
      return true;
    }
    case EDIT_AUTH_STATUS_SUCCESS: {
      return true;
    }
    default:
      return state;
  }
}

export default editMode;
