import React from 'react';
import {FormGroup} from 'react-bootstrap';

import {VariablePath} from '../variable/VariablePropTypes';
import TimePicker from './TimePicker';
import {DateTime} from './TimePropTypes';
import './TimeRange.css';

export default TimeRange;


TimeRange.propTypes = {
  variablePath: VariablePath.isRequired,
  min: DateTime.isRequired,
  max: DateTime.isRequired
}

export function TimeRange({ min, max, variablePath }) {
  return (
    <FormGroup className="TimeRange">
      <TimePicker dateTime={min} variablePath={variablePath.concat(['min'])} />
      to
      <TimePicker dateTime={max} variablePath={variablePath.concat(['max'])} />
    </FormGroup>
  );
}
