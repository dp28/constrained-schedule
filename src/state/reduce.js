import {fromJS} from 'immutable';

import {INITIALISE_STATE, UPDATE_VALUE} from './StateActionCreators';

const initialState = fromJS({ constrainedEvents: [], eventContext: {} });

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case INITIALISE_STATE: return fromJS(action.state);
    case UPDATE_VALUE:     return state.setIn(action.variablePath, action.value);
    default:               return state;
  }
}
