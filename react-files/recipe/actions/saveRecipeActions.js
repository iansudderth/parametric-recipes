import axios from 'axios';
import _ from 'lodash';
import { requestRecipe } from './index';

// Action dispactchers to control to opening and closing of SaveDialog

export const SAVE_DIALOG_OPEN = 'SAVE_DIALOG_OPEN';
export function SaveDialogOpen() {
  return {
    type: SAVE_DIALOG_OPEN,
  };
}

export const SAVE_DIALOG_CLOSE = 'SAVE_DIALOG_CLOSE';
export function saveDialogClose() {
  return {
    type: SAVE_DIALOG_CLOSE,
  };
}

// Action dispatchers for updating the save status
// Should not be called directly, only through thunks
// Valid Save Status :
// INITIAL, PROGRESS, SUCCESS, ERROR

export const SAVE_STATUS_INITIAL = 'SAVE_STATUS_INITIAL';
export function saveStatusInitial() {
  return {
    type: SAVE_STATUS_INITIAL,
  };
}

export const SAVE_STATUS_PROGRESS = 'SAVE_STATUS_PROGRESS';
export function saveStatusProgress() {
  return {
    type: SAVE_STATUS_PROGRESS,
  };
}

export const SAVE_STATUS_SUCCESS = 'SAVE_STATUS_SUCCESS';
export function saveStatusSuccess() {
  return {
    type: SAVE_STATUS_SUCCESS,
  };
}

export const SAVE_STATUS_ERROR = 'SAVE_STATUS_ERROR';
export function saveStatusError() {
  return {
    type: SAVE_STATUS_ERROR,
  };
}

// Action dispatch for saving recipe to database
// This action should be called to handle api interactions

export const SAVE_NEW_RECIPE = 'SAVE_NEW_RECIPE';
export function saveNewRecipe(recipe, password) {
  return dispatch => {
    dispatch(saveStatusProgress());
    axios.post('/recipe/new', { recipe, password }).then(
      response => {
        dispatch(saveStatusSuccess());
        dispatch(requestRecipe(response.data.recipeId));
        _.delay(dispatch, 1500, saveDialogClose());
        console.log(response);
      },
      error => {
        dispatch(saveStatusError());
        console.log(error);
      }
    );
  };
}
