import { stateChange } from '../helper_functions';
import {
  DELETE_DIALOG_OPEN,
  DELETE_DIALOG_CLOSE,
  DELETE_STATUS_INITIAL,
  DELETE_STATUS_SUCCESS,
  DELETE_STATUS_ERROR,
  DELETE_STATUS_NEED_PASSWORD,
  DELETE_STATUS_PASSWORD_CORRECT,
  DELETE_STATUS_PASSWORD_INCORRECT,
  DELETE_STATUS_NO_PASSWORD,
  DELETE_STATUS_PASSWORD_ERROR,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function deleteDialog(state = initialState, action) {
  switch (action.type) {
    case DELETE_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case DELETE_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    default: {
      return state;
    }
  }
}
