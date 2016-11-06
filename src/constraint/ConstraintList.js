import React from 'react';
import {connect} from 'react-redux';

import Constraint from './Constraint';
import {getConstraints} from './ConstraintSelectors';

export default connect(mapStateToProps)(ConstraintList);

export function ConstraintList({ constraints }) {
  return (
    <ul>
      {constraints.map(ListItem)}
    </ul>
  );
}

function ListItem(constraint) {
  return (
    <li key={constraint.get('id')}>
      <Constraint constraint={constraint} />
    </li>
  );
}

export function mapStateToProps(state) {
  return { constraints: getConstraints(state) };
}
