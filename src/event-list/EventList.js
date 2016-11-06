import React from 'react';

export default EventList;

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
