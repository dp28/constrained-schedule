import React from 'react';

import Expandable from '../expandable/Expandable';
import {VariablePath} from '../variable/VariablePropTypes';
import Summary from './ConstrainedEventSummary';
import EditEvent from './EditConstrainedEvent';
import {Event} from './ConstrainedEventPropTypes';
import './ConstrainedEvent.css';

export default ConstrainedEvent;

ConstrainedEvent.propTypes = {
  event: Event.isRequired,
  variablePath: VariablePath.isRequired
}

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
