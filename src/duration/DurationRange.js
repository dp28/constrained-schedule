import React from 'react';
import {FormGroup} from 'react-bootstrap';

import DurationPicker from './DurationPicker';
import './DurationRange.css';

export default DurationRange;

export function DurationRange({ min, max, variablePath }) {
  return (
    <FormGroup className="DurationRange">
      <DurationPicker value={min} variablePath={variablePath.concat(['min'])} />
      to
      <DurationPicker value={max} variablePath={variablePath.concat(['max'])} />
      minutes
    </FormGroup>
  );
}
