import React from 'react';

import TimeRange from '../time/TimeRange';
import DurationRange from '../duration/DurationRange';
import './ConstrainedEvent.css';

const ConstrainedEvent = ({ event }) => (
  <div className="ConstrainedEvent">
    <span className="ConstrainedEvent-name">{event.name}</span>
    <label>
      <span className="ConstrainedEvent-field">Duration</span>
      <DurationRange {...event.duration} />
    </label>

    <label>
      <span className="ConstrainedEvent-field">Start</span>
      <TimeRange {...event.start} />
    </label>
    <label>
      <span className="ConstrainedEvent-field">End</span>
      <TimeRange {...event.end} />
    </label>
  </div>
);

export default ConstrainedEvent;
