export const CREATE_CONSTRAINT = 'CREATE_CONSTRAINT';

export function createConstraint(events, constraintType) {
  const eventIds = events.toJS().map(event => event.id);
  return { type: CREATE_CONSTRAINT, eventIds, constraintType };
}
