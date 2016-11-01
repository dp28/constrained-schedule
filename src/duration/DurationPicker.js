import React from 'react';
import {connect} from "react-redux";
import {FormControl} from 'react-bootstrap';

import {extractMinutesPerUnit} from '../event-context/event-context-utils';
import './DurationPicker.css';

export const DurationPicker = ({ value, minutesPerUnit }) => (
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

export default connect(extractMinutesPerUnit)(DurationPicker);
