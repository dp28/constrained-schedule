import {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const Constraint = ImmutablePropTypes.mapContains({
  id: PropTypes.string,
  type: PropTypes.string,
  eventIds: ImmutablePropTypes.iterableOf(PropTypes.string)
});
