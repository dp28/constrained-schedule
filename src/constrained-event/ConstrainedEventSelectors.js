import {createSelector} from 'reselect';

export const getEventMap = stateOrEvents => stateOrEvents.get('constrainedEvents') || stateOrEvents;

export const getSortedEvents = createSelector(
  getEventMap,
  eventMap => eventMap.valueSeq().sort(compareEvents)
);

function compareEvents(firstEvent, secondEvent) {
  const timeDifference = firstEvent.getIn(['start', 'min']) - secondEvent.getIn(['start', 'min']);
  if (timeDifference === 0) {
    return secondEvent.get('createdAt', 0) - firstEvent.get('createdAt', 0);
  }
  else {
    return timeDifference;
  }
}

export const getFirstEvent = createSelector(getSortedEvents, events => events.first());
