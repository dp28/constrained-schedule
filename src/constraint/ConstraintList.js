import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {connect} from 'react-redux';

import Constraint from './Constraint';
import {getConstraints} from './ConstraintSelectors';
import * as ConstraintPropTypes from './ConstraintPropTypes';

export default connect(mapStateToProps)(ConstraintList);

ConstraintList.propTypes = {
  constraints: ImmutablePropTypes.iterableOf(ConstraintPropTypes.Constraint).isRequired
}

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
