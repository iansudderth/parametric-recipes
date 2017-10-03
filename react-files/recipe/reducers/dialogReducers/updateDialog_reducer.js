import { stateChange } from '../helper_functions';

import {
  UPDATE_DIALOG_OPEN,
  UPDATE_DIALOG_CLOSE,
  UPDATE_STATUS_INITIAL,
  UPDATE_STATUS_PROGRESS,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_NEED_PASSWORD,
  UPDATE_STATUS_PASSWORD_PROGRESS,
  UPDATE_STATUS_INCORRECT_PASSWORD,
  UPDATE_STATUS_PASSWORD_ERROR,
  UPDATE_STATUS_ERROR,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function updateDialog(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case UPDATE_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    default: {
      return state;
    }
  }
}
