import React from 'react';
import {FormGroup} from 'react-bootstrap';

import TimePicker from './TimePicker';
import './TimeRange.css';

export default TimeRange;

export function TimeRange({ min, max, variablePath }) {
  return (
    <FormGroup className="TimeRange">
      <TimePicker dateTime={min} variablePath={variablePath.concat(['min'])} />
      to
      <TimePicker dateTime={max} variablePath={variablePath.concat(['max'])} />
    </FormGroup>
  );
}
