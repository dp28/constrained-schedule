import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import ConstrainedEvent from './ConstrainedEvent';

const ListItem = variablePath => event => (
  <ListGroupItem key={event.get('id')}>
    <ConstrainedEvent event={event} variablePath={variablePath.concat([event.get('id')])} />
  </ListGroupItem>
);

const ConstrainedEventList = ({ eventMap, variablePath }) => (
  <ListGroup>
    {sortByStartTime(eventMap).map(ListItem(variablePath))}
  </ListGroup>
);

function sortByStartTime(eventMap) {
  return eventMap
    .valueSeq()
    .sort((event1, event2) => event1.getIn(['start', 'min']) - event2.getIn(['start', 'min']));
}

export default ConstrainedEventList;
