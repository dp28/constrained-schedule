import React from 'react';
import {FormControl} from 'react-bootstrap';

import './time-picker.css';

const TimePicker = ({ value }) => (
  <FormControl className="TimePicker" type="time" value={toTimeString(value)} />
);

function toTimeString(date) {
  return date.toTimeString().substring(0, 8);
}

export default TimePicker;
