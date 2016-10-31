import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import ConstrainedEvent from './ConstrainedEvent';

const ListItem = event => (
  <ListGroupItem key={event.id}>
    <ConstrainedEvent event={event} />
  </ListGroupItem>
);

const ConstrainedEventList = ({ events }) => (
  <ListGroup>
    {events.map(ListItem)}
  </ListGroup>
);

export default ConstrainedEventList;
