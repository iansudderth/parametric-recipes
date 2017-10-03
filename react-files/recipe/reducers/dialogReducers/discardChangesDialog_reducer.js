import { stateChange } from '../helper_functions';

import {
  DISCARD_DIALOG_OPEN,
  DISCARD_DIALOG_CLOSE,
  DISCARD_STATUS_INITIAL,
  DISCARD_STATUS_LOG_OUT_PROGRESS,
  DISCARD_STATUS_LOG_OUT_SUCCESS,
  DISCARD_STATUS_LOG_OUT_ERROR,
} from '../../actions';

const initialState = {
  open: false,
  status: 'INITIAL',
};

export default function discardChangesDialog(state = initialState, action) {
  switch (action.type) {
    case DISCARD_DIALOG_OPEN: {
      return stateChange(state, {
        open: true,
      });
    }
    case DISCARD_DIALOG_CLOSE: {
      return stateChange(state, {
        open: false,
      });
    }
    default: {
      return state;
    }
  }
}
