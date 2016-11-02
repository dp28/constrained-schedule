import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import ConstrainedEvent from './ConstrainedEvent';

const ListItem = variablePath => (event, index) => (
  <ListGroupItem key={event.get('id')}>
    <ConstrainedEvent event={event} variablePath={variablePath.concat([index])} />
  </ListGroupItem>
);

const ConstrainedEventList = ({ events, variablePath }) => (
  <ListGroup>
    {events.map(ListItem(variablePath))}
  </ListGroup>
);

export default ConstrainedEventList;
