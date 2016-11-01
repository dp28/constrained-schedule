import {UPDATE_TIME} from './TimeActionCreators';

export default function reduce(events, action) {
  switch (action.type) {
    case UPDATE_TIME: return events.setIn(action.variablePath, action.value);
    default:              return events;
  }
}
