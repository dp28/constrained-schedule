import React from 'react';
import {FormControl} from 'react-bootstrap';

import './TimePicker.css';

const TimePicker = ({ value, variablePath }) => (
  <FormControl className="TimePicker" type="time" value={toTimeString(value, variablePath)} />
);

function toTimeString(date, variablePath) {
  return date.toTimeString().substring(0, 8);
}

export default TimePicker;
