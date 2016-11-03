import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getSortedEvents} from './ConstrainedEventSelectors';
import {createEvent as unboundCreateEvent} from './ConstrainedEventActionCreators';
import ConstrainedEvent from './ConstrainedEvent';

const ListItem = variablePath => event => (
  <ListGroupItem key={event.get('id')}>
    <ConstrainedEvent event={event} variablePath={variablePath.concat([event.get('id')])} />
  </ListGroupItem>
);

const ConstrainedEventList = ({ events, createEvent }) => (
  <div>
    <Button bsStyle="primary" block onClick={createEvent}>New event</Button>
    <ListGroup>
      {events.map(ListItem(['constrainedEvents']))}
    </ListGroup>
  </div>
);

export function mapStateToProps(state) {
  return { events: getSortedEvents(state) };
};

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createEvent: unboundCreateEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstrainedEventList);
