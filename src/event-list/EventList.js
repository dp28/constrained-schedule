import React from 'react';

import * as EventPropTypes from '../constrained-event/ConstrainedEventPropTypes';

export default EventList;

EventList.propTypes = {
  events: EventPropTypes.EventList.isRequired
}

export function EventList({ events }) {
  return (
    <ul>
      {events.map(ListItem)}
    </ul>
  );
}

function ListItem(event) {
  return <li key={event.get('id')}>{event.get('name')}</li>;
}
