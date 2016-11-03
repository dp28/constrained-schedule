import generateId from 'cuid';
import {fromJS} from 'immutable';

import {getFirstEvent} from './ConstrainedEventSelectors';
import {buildTimeRange} from '../utils/time';
import {DELETE_EVENT, CREATE_EVENT} from './ConstrainedEventActionCreators';

export default function reduce(eventMap = fromJS({}), action) {
  switch (action.type) {
    case CREATE_EVENT:    return createEvent(eventMap);
    case DELETE_EVENT: return eventMap.delete(action.id);
    default:           return eventMap;
  }
}

function createEvent(eventMap) {
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
