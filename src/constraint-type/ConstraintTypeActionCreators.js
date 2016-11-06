export const SELECT_CONSTRAINT_TYPE = 'SELECT_CONSTRAINT_TYPE';

export function selectConstraintType(constraintType) {
  return { type: SELECT_CONSTRAINT_TYPE, constraintType };
}
