import React from 'react';

import TimeRange from '../time-range/time-range';
import DurationRange from '../duration-range/duration-range';

const ConstrainedEventListItem = ({ event, minutesPerUnit }) => (
  <div className="ConstrainedEventListItem">
    <span className="ConstrainedEventListItem-name">{event.name}</span>
    <dl>
      <dt>Duration</dt>
      <dd><DurationRange {...event.duration} minutesPerUnit={minutesPerUnit} /></dd>
      <dt>Start</dt>
      <dd><TimeRange {...event.start} /></dd>
      <dt>End</dt>
      <dd><TimeRange {...event.end} /></dd>
    </dl>
  </div>
);

export default ConstrainedEventListItem;
