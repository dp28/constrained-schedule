import React from 'react';
import {FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';

import {withEventValue} from '../utils/dom';
import {updateValue} from '../state/StateActionCreators';

export const TextInput = ({ text, variablePath, onChange }) => (
  <FormControl type="text" value={text} onChange={onChange(variablePath)} />
);

export function mapDispatchToProps(dispatch) {
  return {
    onChange: variablePath => withEventValue(value => dispatch(updateValue(variablePath, value)))
  };
}

export default connect(null, mapDispatchToProps)(TextInput)
