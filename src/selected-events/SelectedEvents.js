import React from 'react';
import {connect} from 'react-redux';

import {getSelectedEvents} from './SelectedEventSelectors';

export const SelectedEvents = ({ events }) => (
  <ul>
    {events.map(ListItem)}
  </ul>
);

function ListItem(event) {
  return <li key={event.get('id')}>{event.get('name')}</li>;
}

export function mapStateToProps(state) {
  return { events: getSelectedEvents(state) };
}

export default connect(mapStateToProps)(SelectedEvents);
