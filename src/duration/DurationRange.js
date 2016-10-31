import React from 'react';
import {FormGroup} from 'react-bootstrap';

import DurationPicker from './DurationPicker';
import './DurationRange.css';

const DurationRange = ({ min, max }) => {
  return (
    <FormGroup className="DurationRange">
      <DurationPicker value={min} />
      to
      <DurationPicker value={max} />
      minutes
    </FormGroup>
  );
};

export default DurationRange;
