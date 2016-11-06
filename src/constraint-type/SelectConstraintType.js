import React from 'react';
import {FormControl} from 'react-bootstrap';

import {withEventValue} from '../utils/dom';
import CONSTRAINT_TYPES from './ConstraintTypes';

export default SelectConstraintType;

export function SelectConstraintType({ onChange, selected }) {
  return (
    <FormControl componentClass="select" onChange={withEventValue(onChange)} defaultValue={selected}>
      {CONSTRAINT_TYPES.map(type =>
        <option key={type} value={type}>{type}</option>
      )}
    </FormControl>
  );
}
