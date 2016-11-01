import React from 'react';
import {FormGroup} from 'react-bootstrap';

import TimePicker from './TimePicker';
import './TimeRange.css';

const TimeRange = ({ min, max, variablePath }) => (
  <FormGroup className="TimeRange">
    <TimePicker dateTime={min} variablePath={variablePath.concat(['min'])} />
    to
    <TimePicker dateTime={max} variablePath={variablePath.concat(['max'])} />
  </FormGroup>
);

export default TimeRange;
