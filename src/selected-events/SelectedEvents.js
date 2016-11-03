import React from 'react';

export const SelectedEvents = ({ events }) => (
  <ul>
    {events.map(ListItem)}
  </ul>
);

function ListItem(event) {
  return <li key={event.get('id')}>{event.get('name')}</li>;
}

export default SelectedEvents;
