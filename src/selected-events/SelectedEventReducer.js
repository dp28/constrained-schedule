import {Set} from 'immutable';

import {removeValue} from '../utils/immutable';
import {DELETE_EVENT} from '../constrained-event/ConstrainedEventActionCreators';
import {CREATE_CONSTRAINT} from '../constraint/ConstraintActionCreators';
import {TOGGLE_EVENT_SELECTED} from './SelectedEventActionCreators';

export default function reduce(selectedEventIds = Set(), action) {
  switch (action.type) {
    case DELETE_EVENT:          return removeValue(action.id, selectedEventIds);
    case CREATE_CONSTRAINT:     return Set();
    case TOGGLE_EVENT_SELECTED: return toggleInclusion(action.id, selectedEventIds);
    default:                    return selectedEventIds;
  }
}

function toggleInclusion(value, list) {
  return list.includes(value) ? removeValue(value, list) : list.add(value);
}
