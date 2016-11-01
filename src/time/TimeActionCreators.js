export const UPDATE_TIME = 'UPDATE_TIME';

export function updateTime(variablePath, value) {
  return {
    type: UPDATE_TIME,
    variablePath,
    value
  }
}
