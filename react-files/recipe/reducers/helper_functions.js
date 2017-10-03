import _ from 'lodash';

export function stateChange(state, change) {
  return _.merge({}, state, change);
}
