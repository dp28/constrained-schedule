import {createSelector} from 'reselect';

import CONSTRAINT_TYPES from './ConstraintTypes';

export const getSelectedType = createSelector(
  state => state.get('selectedType'),
  selectedType => selectedType || CONSTRAINT_TYPES[0]
)
