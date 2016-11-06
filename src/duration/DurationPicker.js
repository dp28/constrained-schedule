import React from 'react';
import {connect} from 'react-redux';
import {FormControl} from 'react-bootstrap';

import {updateValue} from '../state/StateActionCreators';
import {extractMinutesPerUnit} from '../event-context/event-context-utils';
import {VariablePath} from '../variable/VariablePropTypes';
import './DurationPicker.css';

export default connect(extractMinutesPerUnit, mapDispatchToProps)(DurationPicker);

DurationPicker.propTypes = {
  variablePath: VariablePath.isRequired,
  value: React.PropTypes.number.isRequired,
  minutesPerUnit: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export function DurationPicker({ value, variablePath, minutesPerUnit, onChange }) {
  return (
    <FormControl
      className="DurationPicker"
      type="number"
      step={minutesPerUnit}
      value={scale(value, minutesPerUnit)}
      onChange={onChange(variablePath, minutesPerUnit)}
    />
  );
}

function scale(time, minutesPerUnit) {
  return time * minutesPerUnit;
}

export function mapDispatchToProps(dispatch) {
  return {
    onChange: (variablePath, minutesPerUnit) => ({ target }) => {
      return dispatch(updateValue(variablePath, Number(target.value) / minutesPerUnit))
    }
  };
}
