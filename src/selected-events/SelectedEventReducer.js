import {fromJS} from 'immutable';

import {DELETE_EVENT} from '../constrained-event/ConstrainedEventActionCreators';
import {TOGGLE_EVENT_SELECTED} from './SelectedEventActionCreators';

export default function reduce(selectedEventIds = fromJS([]), action) {
  switch (action.type) {
    case DELETE_EVENT:          return removeValue(action.id, selectedEventIds);
    case TOGGLE_EVENT_SELECTED: return toggleInclusion(action.id, selectedEventIds);
    default:                    return selectedEventIds;
  }
}

function toggleInclusion(value, list) {
  return list.includes(value) ? removeValue(value, list) : list.push(value);
}

function removeValue(valueToRemove, list) {
  return list.filter(value => value !== valueToRemove)
}
