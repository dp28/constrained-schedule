import React from 'react';
import {FormGroup} from 'react-bootstrap';

import {VariablePath} from '../variable/VariablePropTypes';
import DurationPicker from './DurationPicker';
import './DurationRange.css';

export default DurationRange;

DurationRange.propTypes = {
  variablePath: VariablePath.isRequired,
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired
}

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
