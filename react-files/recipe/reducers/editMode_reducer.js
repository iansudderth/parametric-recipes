import {
  NEW_RECIPE,
  CHANGE_RECIPE,
  PUBLISH_RECIPE_SUCCESS,
  RECIPE_LOGIN_SUCCESS,
  EDIT_AUTH_STATUS_SUCCESS,
  RESET,
  DISCARD_STATUS_LOGOUT_PROGRESS,
} from '../actions';

function editMode(state = false, action) {
  switch (action.type) {
    case RESET:
      return false;
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
    case DISCARD_STATUS_LOGOUT_PROGRESS: {
      return false;
    }
    default:
      return state;
  }
}

export default editMode;
