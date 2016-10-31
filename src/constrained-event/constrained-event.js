import React from 'react';

import TimeRange from '../time-range/time-range';
import DurationRange from '../duration-range/duration-range';
import './constrained-event.css';

const ConstrainedEvent = ({ event, minutesPerUnit }) => (
  <div className="ConstrainedEvent">
    <span className="ConstrainedEvent-name">{event.name}</span>
    <label>
      <span className="ConstrainedEvent-field">Duration</span>
      <DurationRange {...event.duration} minutesPerUnit={minutesPerUnit} />
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
