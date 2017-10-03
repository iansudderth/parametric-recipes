import { stateChange } from '../helper_functions';

import {
  SAVE_DIALOG_OPEN,
  SAVE_DIALOG_CLOSE,
  SAVE_STATUS_INITIAL,
  SAVE_STATUS_PROGRESS,
  SAVE_STATUS_SUCCESS,
  SAVE_STATUS_ERROR,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function saveDialog(state = initialState, action) {
  switch (action.type) {
    case SAVE_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case SAVE_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    default: {
      return state;
    }
  }
}
