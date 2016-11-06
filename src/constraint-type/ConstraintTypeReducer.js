import {SELECT_CONSTRAINT_TYPE} from './ConstraintTypeActionCreators';

export default function reduce(selectedType = null, action) {
  switch (action.type) {
    case SELECT_CONSTRAINT_TYPE: return action.constraintType;
    default:                     return selectedType;
  }
}
