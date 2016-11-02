import generateId from 'cuid';
import {fromJS} from 'immutable';

import {getFirstEvent} from './ConstrainedEventSelectors';
import {buildTimeRange} from '../utils/time';
import {DELETE_EVENT, ADD_EVENT} from './ConstrainedEventActionCreators';

export default function reduce(eventMap = fromJS({}), action) {
  switch (action.type) {
    case ADD_EVENT:    return addEvent(eventMap);
    case DELETE_EVENT: return eventMap.delete(action.id);
    default:           return eventMap;
  }
}

function addEvent(eventMap) {
  const id = generateId();
  const sourceEvent = findSourceEvent(eventMap);
  return eventMap.set(id, sourceEvent.merge({ id, name: 'New event', createdAt: new Date() }));
}

function findSourceEvent(eventMap) {
  return getFirstEvent(eventMap) || fromJS({
    start: buildTimeRange(8, 10),
    end: buildTimeRange(16, 18),
    duration: { min: 4, max: 8 }
  });
}
