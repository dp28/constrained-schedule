import generateId from 'cuid';
import {fromJS} from 'immutable';

import {buildTimeRange} from '../utils/time';

export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export function addEvent() {
  return {
    type: ADD_EVENT,
    event: fromJS({
      id: generateId(),
      start: buildTimeRange(8, 10),
      end:   buildTimeRange(12, 14),
      duration: { min: 4, max: 8 }
    })
  };
}

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id };
}
