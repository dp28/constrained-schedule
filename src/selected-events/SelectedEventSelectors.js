import {createSelector} from 'reselect';

import {getEventMap} from '../constrained-event/ConstrainedEventSelectors';

export const getSelectedEventIds = state => state.get('selectedEventIds');

export const getSelectedEvents = createSelector(
  getEventMap,
  getSelectedEventIds,
  (eventMap, selectedIds) => selectedIds.map(id => eventMap.get(id))
);

export const getIsEventSelected = createSelector(
  getSelectedEventIds,
  selectedIds => id => selectedIds.includes(id)
)
