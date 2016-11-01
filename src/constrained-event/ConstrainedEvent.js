import React from 'react';

import TimeRange from '../time/TimeRange';
import DurationRange from '../duration/DurationRange';
import './ConstrainedEvent.css';

const ConstrainedEvent = ({ event }) => (
  <div className="ConstrainedEvent">
    <span className="ConstrainedEvent-name">{event.name}</span>
    <label>
      <span className="ConstrainedEvent-field">Duration</span>
      <DurationRange {...extractMinAndMax('duration', event)} />
    </label>

    <label>
      <span className="ConstrainedEvent-field">Start</span>
      <TimeRange {...extractMinAndMax('start', event)} />
    </label>
    <label>
      <span className="ConstrainedEvent-field">End</span>
      <TimeRange {...extractMinAndMax('end', event)} />
    </label>
  </div>
);

function extractMinAndMax(varName, event) {
  return {
    min: event.getIn([varName, 'min']),
    max: event.getIn([varName, 'max']),
  }
}

export default ConstrainedEvent;
