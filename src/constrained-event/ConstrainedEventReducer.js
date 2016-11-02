import {Map} from 'immutable';

import {DELETE_EVENT, ADD_EVENT} from './ConstrainedEventActionCreators';

export default function reduce(state = Map({}), action) {
  switch (action.type) {
    case ADD_EVENT:    return state.set(action.event.get('id'), action.event);
    case DELETE_EVENT: return state.delete(action.id);
    default:           return state;
  }
}
