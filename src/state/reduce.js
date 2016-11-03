import {fromJS} from 'immutable';

import {INITIALISE_STATE, UPDATE_VALUE} from './StateActionCreators';
import reduceEvents from '../constrained-event/ConstrainedEventReducer';
import reduceSelectedEvents from '../selected-events/SelectedEventReducer';

const initialState = fromJS({ constrainedEvents: [], eventContext: {}, selectedEventIds: [] });

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case INITIALISE_STATE: return fromJS(action.state);
    case UPDATE_VALUE:     return state.setIn(action.variablePath, action.value);
    default:               return reduceParts(state, action);
  }
}

function reduceParts(state, action) {
  return state
    .set('constrainedEvents', reduceEvents(state.get('constrainedEvents'), action))
    .set('selectedEventIds', reduceSelectedEvents(state.get('selectedEventIds'), action));
}
