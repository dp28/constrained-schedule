import {fromJS} from 'immutable';

import reduceDurations from '../duration/DurationReducer';
import {INITIALISE_STATE} from './StateActions';

const initialState = fromJS({ constrainedEvents: [], eventContext: {} });

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case INITIALISE_STATE: return fromJS(action.state);
    default:               return reduceEvents(state, action);
  }
}

const eventsKey = 'constrainedEvents';

function reduceEvents(state, action) {
  const events = state.get(eventsKey);
  return state.set(eventsKey, reduceDurations(events, action));
}
