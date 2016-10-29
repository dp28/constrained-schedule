import React from 'react';

import ConstrainedEvent from '../constrained-event/constrained-event';
import List from '../list/list';

const ListItem = props => (
  <li key={props.event.id}>
    <ConstrainedEvent {...props} />
  </li>
);

const ConstrainedEventList = ({ events, minutesPerUnit }) => (
  List(events.map(event =>
    ListItem({ event, minutesPerUnit })
  ))
);

export default ConstrainedEventList;
