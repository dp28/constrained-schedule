import {fromJS} from 'immutable';

import {INITIALISE_STATE} from './StateActions';

const initialState = fromJS({ constrainedEvents: [], eventContext: {} });

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case INITIALISE_STATE: return fromJS(action.state);
    default:               return state;
  }
}
