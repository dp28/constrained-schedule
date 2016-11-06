import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getSortedEvents} from './ConstrainedEventSelectors';
import {createEvent as unboundCreateEvent} from './ConstrainedEventActionCreators';
import ConstrainedEvent from './ConstrainedEvent';
import {EventList} from './ConstrainedEventPropTypes';

export default connect(mapStateToProps, mapDispatchToProps)(ConstrainedEventList);

ConstrainedEventList.propTypes = {
  events: EventList,
  createEvent: React.PropTypes.func.isRequired
}

export function ConstrainedEventList({ events, createEvent }) {
  return (
    <div>
      <Button bsStyle="primary" block onClick={createEvent}>New event</Button>
      <ListGroup>
        {events.map(ListItem(['constrainedEvents']))}
      </ListGroup>
    </div>
  );
}

function ListItem(variablePath) {
  return event => (
    <ListGroupItem key={event.get('id')}>
      <ConstrainedEvent event={event} variablePath={variablePath.concat([event.get('id')])} />
    </ListGroupItem>
  );
}

export function mapStateToProps(state) {
  return { events: getSortedEvents(state) };
};

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createEvent: unboundCreateEvent }, dispatch);
}
