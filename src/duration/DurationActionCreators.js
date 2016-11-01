export const UPDATE_DURATION = 'UPDATE_DURATION';

export function updateDuration(variablePath, value) {
  return {
    type: UPDATE_DURATION,
    variablePath,
    value
  }
}
