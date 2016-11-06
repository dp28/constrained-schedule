import {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const Event = ImmutablePropTypes.mapContains({
  id: PropTypes.string,
  name: PropTypes.string
})

export const EventList = ImmutablePropTypes.iterableOf(Event);
