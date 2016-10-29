import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const TimeRange = ({ min, max, minutesPerUnit }) => {
  return (
    <FormGroup className="TimeRange">
      <FormControl type="number" step={minutesPerUnit} value={scale(min, minutesPerUnit)} />
      to
      <FormControl type="number" step={minutesPerUnit} value={scale(max, minutesPerUnit)} />
      minutes
    </FormGroup>
  );
};

function scale(time, minutesPerUnit) {
  return time * minutesPerUnit;
}

export default TimeRange;
