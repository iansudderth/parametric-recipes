import _ from 'lodash';
import {
	EDIT_TITLE,
	EDIT_SERVING_AMOUNT,
	EDIT_SERVING_UNIT,
} from '../../actions';

export default function editHeaderReducer(state, action) {
	switch (action.type) {
		case EDIT_TITLE:
			return state;
		case EDIT_SERVING_AMOUNT:
			const newAmount = action.payload.newAmount;
			const newState = _.merge({}, state, {
				serving: { amount: newAmount },
			});
			return newState;
		case EDIT_SERVING_UNIT:
			return state;
		default:
			return state;
	}
}
