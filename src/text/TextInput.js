import React from 'react';
import {FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';

import {withEventValue} from '../utils/dom';
import {updateValue} from '../state/StateActionCreators';

export default connect(null, mapDispatchToProps)(TextInput);

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
