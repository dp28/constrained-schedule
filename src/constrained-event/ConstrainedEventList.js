import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import ConstrainedEvent from './ConstrainedEvent';

const ListItem = (event, index) => (
  <ListGroupItem key={event.get('id')}>
    <ConstrainedEvent event={event} variablePath={[index]} />
  </ListGroupItem>
);

const ConstrainedEventList = ({ events }) => (
  <ListGroup>
    {events.map(ListItem)}
  </ListGroup>
);

export default ConstrainedEventList;
