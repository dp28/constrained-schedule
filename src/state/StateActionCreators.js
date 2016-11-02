export const INITIALISE_STATE = 'INITIALISE_STATE';
export const UPDATE_VALUE = 'UPDATE_VALUE';

export function initialiseState(state) {
  return { type: INITIALISE_STATE, state };
}

export function updateValue(variablePath, value) {
  return { type: UPDATE_VALUE, variablePath, value };
}
