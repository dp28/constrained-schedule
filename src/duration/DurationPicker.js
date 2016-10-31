import React from 'react';
import {FormControl} from 'react-bootstrap';

import './DurationPicker.css';

const DurationPicker = ({ minutesPerUnit, value }) => (
  <FormControl
    className="DurationPicker"
    type="number"
    step={minutesPerUnit}
    value={scale(value, minutesPerUnit)}
  />
);

function scale(time, minutesPerUnit) {
  return time * minutesPerUnit;
}

export default DurationPicker;
