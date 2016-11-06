import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

export default SelectInt;

SelectInt.propTypes = {
  end: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
  start: React.PropTypes.number,
  step: React.PropTypes.number,
  selected: React.PropTypes.number,
  unit: React.PropTypes.string,
  display: React.PropTypes.func
}

export function SelectInt({
  start = 0,
  end,
  step = 1,
  selected = null,
  unit = '',
  onChange,
  display = displayAsIs
}) {
  return (
    <FormGroup>
      <FormControl componentClass="select" onChange={onChange} defaultValue={selected}>
        {buildSteps(start, end, step).map(stepValue => (
          <option value={stepValue} key={stepValue}>
            {display(stepValue)} {unit}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  );
}

function buildSteps(start, end, step) {
  let steps = [];
  while (start < end) {
    steps.push(start);
    start += step
  }
  return steps;
}

function displayAsIs(value) {
  return value;
}
