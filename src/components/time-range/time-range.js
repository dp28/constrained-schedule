import React from 'react';
import {FormGroup} from 'react-bootstrap';

import TimePicker from '../time-picker/time-picker';
import './time-range.css';

const TimeRange = ({ min, max }) => (
  <FormGroup className="TimeRange">
    <TimePicker value={min} />
    to
    <TimePicker value={max} />
  </FormGroup>
);

export default TimeRange;
