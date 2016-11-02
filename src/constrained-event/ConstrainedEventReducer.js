import {Map} from 'immutable';

import {DELETE_EVENT} from './ConstrainedEventActionCreators';

export default function reduce(state = Map({}), action) {
  switch (action.type) {
    case DELETE_EVENT: return state.delete(action.id);
    default:           return state;
  }
}
