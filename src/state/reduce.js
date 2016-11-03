import {fromJS} from 'immutable';

import {INITIALISE_STATE, UPDATE_VALUE} from './StateActionCreators';
import constrainedEvents from '../constrained-event/ConstrainedEventReducer';
import selectedEventIds from '../selected-events/SelectedEventReducer';
import constraints from '../constraint/ConstraintReducer';

const reduceStateTree = reduceParts({ constrainedEvents, selectedEventIds, constraints });

export default function reduce(state = fromJS({}), action) {
  switch (action.type) {
    case INITIALISE_STATE: return fromJS(action.state);
    case UPDATE_VALUE:     return state.setIn(action.variablePath, action.value);
    default:               return reduceStateTree(state, action);
  }
}

function reduceParts(reducerMap) {
  return (state, action) => (
    Object
      .keys(reducerMap)
      .reduce(applyReducer(reducerMap, action), state)
  )
}

function applyReducer(reducerMap, action) {
  return (state, reducerKey) => {
    const reduce = reducerMap[reducerKey];
    return state.set(reducerKey, reduce(state.get(reducerKey), action));
  }
}
