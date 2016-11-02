import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addEvent as unboundAddEvent} from './ConstrainedEventActionCreators';
import ConstrainedEvent from './ConstrainedEvent';

const ListItem = variablePath => event => (
  <ListGroupItem key={event.get('id')}>
    <ConstrainedEvent event={event} variablePath={variablePath.concat([event.get('id')])} />
  </ListGroupItem>
);

const ConstrainedEventList = ({ eventMap, variablePath, addEvent }) => (
  <div>
    <Button bsStyle="primary" block onClick={addEvent}>New event</Button>
    <ListGroup>
      {sortByStartTime(eventMap).map(ListItem(variablePath))}
    </ListGroup>
  </div>
);

function sortByStartTime(eventMap) {
  return eventMap
    .valueSeq()
    .sort((event1, event2) => event1.getIn(['start', 'min']) - event2.getIn(['start', 'min']));
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addEvent: unboundAddEvent }, dispatch);
}

export default connect(null, mapDispatchToProps)(ConstrainedEventList);
