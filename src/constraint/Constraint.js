import React from 'react';
import {connect} from 'react-redux';

import {getEventMap} from '../constrained-event/ConstrainedEventSelectors';
import EventList from '../event-list/EventList';

export const Constraint = ({ constraint, events }) => (
  <div className="Constraint">
    Type: {constraint.get('type')}
    <EventList events={events} />
  </div>
)

export function mapStateToProps(state, { constraint }) {
  const eventMap = getEventMap(state);
  return {
    events: constraint.get('eventIds').map(id => eventMap.get(id))
  };
}

export default connect(mapStateToProps)(Constraint);
