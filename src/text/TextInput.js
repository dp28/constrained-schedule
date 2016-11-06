import React from 'react';
import {FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';

import {withEventValue} from '../utils/dom';
import {updateValue} from '../state/StateActionCreators';
import {VariablePath} from '../variable/VariablePropTypes';

export default connect(null, mapDispatchToProps)(TextInput);

TextInput.propTypes = {
  text: React.PropTypes.string.isRequired,
  variablePath: VariablePath.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export function TextInput({ text, variablePath, onChange }) {
  return (
    <FormControl type="text" value={text} onChange={onChange(variablePath)} />
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onChange: variablePath => withEventValue(value => dispatch(updateValue(variablePath, value)))
  };
}
