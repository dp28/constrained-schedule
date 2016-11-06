import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import {toggleEventSelected} from '../selected-events/SelectedEventActionCreators';

const ConstrainedEventSummary = ({ event, toggleSelected }) => (
  <div className="ConstrainedEvent-summary">
    <p>{event.get('name')}</p>
    <Button onClick={toggleSelected}> Select </Button>
  </div>
);

export function mapDispatchToProps(dispatch, { event }) {
  return {
    toggleSelected: () => dispatch(toggleEventSelected(event.get('id')))
  }
}

export default connect(null, mapDispatchToProps)(ConstrainedEventSummary);
