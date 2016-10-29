import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const TimeRange = ({ min, max }) => (
  <FormGroup className="TimeRange">
    <FormControl type="time" value={toTimeString(min)} />
    to
    <FormControl type="time" value={toTimeString(max)} />
  </FormGroup>
);

function toTimeString(date) {
  return date.toTimeString().substring(0, 8);
}

export default TimeRange;
