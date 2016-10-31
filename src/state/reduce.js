import { INITIALISE_STATE } from './StateActions';

const initialState = { constrainedEvents: [], eventContext: {} };

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case INITIALISE_STATE: return action.state;
    default:               return state;
  }
}
