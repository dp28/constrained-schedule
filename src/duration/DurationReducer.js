import {UPDATE_DURATION} from './DurationActionCreators';

export default function reduce(events, action) {
  switch (action.type) {
    case UPDATE_DURATION: return events.setIn(action.variablePath, action.value);
    default:              return events;
  }
}
