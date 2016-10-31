import React from 'react';
import {FormGroup} from 'react-bootstrap';

import DurationPicker from '../duration-picker/duration-picker';
import './duration-range.css';

const DurationRange = ({ min, max, minutesPerUnit }) => {
  return (
    <FormGroup className="DurationRange">
      <DurationPicker minutesPerUnit={minutesPerUnit} value={min} />
      to
      <DurationPicker minutesPerUnit={minutesPerUnit} value={max} />
      minutes
    </FormGroup>
  );
};

export default DurationRange;
