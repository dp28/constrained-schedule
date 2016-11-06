import {createSelector} from 'reselect';

import {buildConstraint} from './ConstraintReducer';
import {isValid} from './ConstraintValidity';
import {getSelectedEvents} from '../selected-events/SelectedEventSelectors';
import {getSelectedType} from '../constraint-type/ConstraintTypeSelectors';

export const canCreateConstraints = createSelector(
  getSelectedEvents,
  getSelectedType,
  (events, type) => isValid(buildConstraint(events.map(_ => _.get('id'), type)))
)

export const getConstraints = createSelector(
  state => state.get('constraints'),
  constraintMap => constraintMap.valueSeq()
)
