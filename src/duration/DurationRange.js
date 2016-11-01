import React from 'react';
import {FormGroup} from 'react-bootstrap';

import DurationPicker from './DurationPicker';
import './DurationRange.css';

const DurationRange = ({ min, max, variablePath }) => {
  return (
    <FormGroup className="DurationRange">
      <DurationPicker value={min} variablePath={variablePath.concat(['min'])} />
      to
      <DurationPicker value={max} variablePath={variablePath.concat(['max'])} />
      minutes
    </FormGroup>
  );
};

export default DurationRange;
