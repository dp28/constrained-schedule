import {fromJS} from 'immutable';
import generateId from 'cuid';

import {isValid} from './ConstraintValidity';
import {CREATE_CONSTRAINT} from './ConstraintActionCreators';
import {DELETE_EVENT} from '../constrained-event/ConstrainedEventActionCreators';
import {removeValue} from '../utils/immutable';

export default function reduce(constraintMap = fromJS({}), action) {
  switch (action.type) {
    case CREATE_CONSTRAINT: return createConstraint(constraintMap, action);
    case DELETE_EVENT:      return deleteEventReferences(constraintMap, action.id);
    default:                return constraintMap;
  }
}

export function buildConstraint(eventIds, type, id = null) {
  return fromJS({ id, eventIds, type });
}

function createConstraint(constraintMap, { eventIds, constraintType }) {
  const id = generateId();
  return constraintMap.set(id, buildConstraint(eventIds, constraintType, id));
}

function deleteEventReferences(constraintMap, eventId) {
  return constraintMap.reduce(removeEventReferencesFromConstraint(eventId), constraintMap);
}

function removeEventReferencesFromConstraint(eventId) {
  return (constraintMap, constraint) => {
    const safeEventIds = removeValue(eventId, constraint.get('eventIds'));
    const safeConstraint = constraint.set('eventIds', safeEventIds);
    const id = constraint.get('id');
    if (isValid(safeConstraint)) {
      return constraintMap.set(id, safeConstraint);
    }
    else {
      return constraintMap.delete(id);
    }
  }
}
