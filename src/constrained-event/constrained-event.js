import React from 'react';

import TimeRange from '../time-range/time-range';
import DateRange from '../date-range/date-range';

const ConstrainedEvent = ({ event, minutesPerUnit }) => (
  <div className="ConstrainedEvent">
    <span className="name">{event.name}</span>
    <dl>
      <dt>Duration</dt>
      <dd><TimeRange {...event.duration} minutesPerUnit={minutesPerUnit} /></dd>
      <dt>Start</dt>
      <dd><DateRange {...event.start} /></dd>
      <dt>End</dt>
      <dd><DateRange {...event.end} /></dd>
    </dl>
  </div>
);

export default ConstrainedEvent;
