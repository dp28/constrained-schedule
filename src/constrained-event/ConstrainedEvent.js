import React from 'react';

import TimeRange from '../time/TimeRange';
import DurationRange from '../duration/DurationRange';
import TextInput from '../text/TextInput';
import './ConstrainedEvent.css';

const ConstrainedEvent = ({ event, variablePath }) => (
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
  </div>
);

function extractRangeProps(varName, event, variablePath) {
  return {
    min: event.getIn([varName, 'min']),
    max: event.getIn([varName, 'max']),
    variablePath: variablePath.concat([varName])
  }
}

export default ConstrainedEvent;
