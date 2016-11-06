import React from 'react';

import Expandable from '../expandable/Expandable';
import Summary from './ConstrainedEventSummary';
import EditEvent from './EditConstrainedEvent';
import './ConstrainedEvent.css';

export default ConstrainedEvent;

export function ConstrainedEvent(props) {
  return (
    <div className="ConstrainedEvent">
      <Expandable
        id={props.event.get('id')}
        alwaysVisible={<Summary event={props.event} />}
        expanded={<EditEvent {...props} />}
      />
    </div>
  );
}
