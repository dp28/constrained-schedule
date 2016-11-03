import React from 'react';
import {connect} from 'react-redux';

import Constraint from './Constraint';
import {getConstraints} from './ConstraintSelectors';

const ListItem = constraint => (
  <li key={constraint.get('id')}>
    <Constraint constraint={constraint} />
  </li>
)

export const ConstraintList = ({ constraints }) => (
  <ul>
    {constraints.map(ListItem)}
  </ul>
)

export function mapStateToProps(state) {
  return { constraints: getConstraints(state) };
}

export default connect(mapStateToProps)(ConstraintList);
