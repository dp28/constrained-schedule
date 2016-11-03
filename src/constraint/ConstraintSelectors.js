import {createSelector} from 'reselect';

import {getSelectedEvents} from '../selected-events/SelectedEventSelectors';

export const canCreateConstraints = createSelector(
  getSelectedEvents,
  selectedEvents => selectedEvents.size > 0
)

export const getConstraints = createSelector(
  state => state.get('constraints'),
  constraintMap => constraintMap.valueSeq()
)
