import {createSelector} from 'reselect';

import {getEventMap} from '../constrained-event/ConstrainedEventSelectors';

export const getSelectedEvents = createSelector(
  getEventMap,
  state => state.get('selectedEventIds'),
  (eventMap, selectedIds) => selectedIds.map(id => eventMap.get(id))
);
