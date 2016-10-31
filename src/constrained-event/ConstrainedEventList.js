import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import ConstrainedEvent from './ConstrainedEvent';

const ListItem = props => (
  <ListGroupItem key={props.event.id}>
    <ConstrainedEvent {...props} />
  </ListGroupItem>
);

const ConstrainedEventList = ({ events, minutesPerUnit }) => (
  <ListGroup>
    {events.map(event => ListItem({ event, minutesPerUnit }))}
  </ListGroup>
);

export default ConstrainedEventList;
