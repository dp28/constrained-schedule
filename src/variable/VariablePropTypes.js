import {PropTypes} from 'react';

export const VariablePath = PropTypes.arrayOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]));
