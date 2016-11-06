export function isValid(constraint) {
  return constraint.get('eventIds').size > 1;
}
