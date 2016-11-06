import React from 'react';
import {connect} from 'react-redux';

import {getEventMap} from '../constrained-event/ConstrainedEventSelectors';
import EventList from '../event-list/EventList';
import * as EventPropTypes from '../constrained-event/ConstrainedEventPropTypes';
import * as ConstraintPropTypes from './ConstraintPropTypes';

export default connect(mapStateToProps)(Constraint);

Constraint.propTypes = {
  constraint: ConstraintPropTypes.Constraint.isRequired,
  events: EventPropTypes.EventList
}

export function Constraint({ constraint, events }) {
  return (
    <div className="Constraint">
      Type: {constraint.get('type')}
      <EventList events={events} />
    </div>
  );
}

export function mapStateToProps(state, { constraint }) {
  const eventMap = getEventMap(state);
  return {
    events: constraint.get('eventIds').map(id => eventMap.get(id))
  };
}
