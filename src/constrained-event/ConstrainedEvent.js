import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import TimeRange from '../time/TimeRange';
import DurationRange from '../duration/DurationRange';
import TextInput from '../text/TextInput';
import {toggleEventSelected} from '../selected-events/SelectedEventActionCreators';
import {deleteEvent} from './ConstrainedEventActionCreators';
import './ConstrainedEvent.css';

const ConstrainedEvent = ({ event, variablePath, remove, toggleSelected }) => (
  <div className="ConstrainedEvent">
    <TextInput text={event.get('name')} variablePath={variablePath.concat(['name'])} />
    <label>
      <span className="ConstrainedEvent-field">Duration</span>
      <DurationRange {...extractRangeProps('duration', event, variablePath)} />
    </label>

    <label>
      <span className="ConstrainedEvent-field">Start</span>
      <TimeRange {...extractRangeProps('start', event, variablePath)} />
    </label>
    <label>
      <span className="ConstrainedEvent-field">End</span>
      <TimeRange {...extractRangeProps('end', event, variablePath)} />
    </label>
    <Button bsStyle="danger" onClick={remove(event)}> Delete </Button>
    <Button onClick={toggleSelected(event)}> Select </Button>
  </div>
);

function extractRangeProps(varName, event, variablePath) {
  return {
    min: event.getIn([varName, 'min']),
    max: event.getIn([varName, 'max']),
    variablePath: variablePath.concat([varName])
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    remove: event => () => dispatch(deleteEvent(event.get('id'))),
    toggleSelected: event => () => dispatch(toggleEventSelected(event.get('id')))
  }
}

export default connect(null, mapDispatchToProps)(ConstrainedEvent);
