import { stateChange } from '../helper_functions';

import {
  EDIT_AUTH_DIALOG_OPEN,
  EDIT_AUTH_DIALOG_CLOSE,
  EDIT_AUTH_STATUS_INITIAL,
  EDIT_AUTH_STATUS_SUCCESS,
  EDIT_AUTH_STATUS_ERROR,
  EDIT_AUTH_STATUS_INCORRECT_PASSWORD,
  EDIT_AUTH_STATUS_NO_PASSWORD,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function editAuthDialog(state = initialState, action) {
  switch (action.type) {
    case EDIT_AUTH_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case EDIT_AUTH_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    default: {
      return state;
    }
  }
}
