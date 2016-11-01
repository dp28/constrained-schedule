import React from 'react';
import {FormGroup} from 'react-bootstrap';

import TimePicker from './TimePicker';
import './TimeRange.css';

const TimeRange = ({ min, max, variablePath }) => (
  <FormGroup className="TimeRange">
    <TimePicker value={min} variablePath={variablePath.concat(['min'])} />
    to
    <TimePicker value={max} variablePath={variablePath.concat(['max'])} />
  </FormGroup>
);

export default TimeRange;
