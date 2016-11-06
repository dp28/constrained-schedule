import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import TimeRange from '../time/TimeRange';
import DurationRange from '../duration/DurationRange';
import TextInput from '../text/TextInput';
import {deleteEvent} from './ConstrainedEventActionCreators';

export default connect(null, mapDispatchToProps)(EditConstrainedEvent);

export function EditConstrainedEvent({ event, variablePath, remove }) {
  return (
    <div >
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
      <Button bsStyle="danger" onClick={remove}> Delete </Button>
    </div>
  );
}

function extractRangeProps(varName, event, variablePath) {
  return {
    min: event.getIn([varName, 'min']),
    max: event.getIn([varName, 'max']),
    variablePath: variablePath.concat([varName])
  }
}

export function mapDispatchToProps(dispatch, { event }) {
  return {
    remove: () => dispatch(deleteEvent(event.get('id')))
  }
}
