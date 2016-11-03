import {fromJS} from 'immutable';
import generateId from 'cuid';

import {CREATE_CONSTRAINT} from './ConstraintActionCreators';

export default function reduce(constraintMap = fromJS({}), action) {
  switch (action.type) {
    case CREATE_CONSTRAINT: return createConstraint(constraintMap, action);
    default:                return constraintMap;
  }
}

function createConstraint(constraintMap, { eventIds }) {
  const id = generateId();
  return constraintMap.set(id, fromJS({ id, eventIds }));
}
