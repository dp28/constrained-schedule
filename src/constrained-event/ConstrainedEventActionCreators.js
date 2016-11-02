export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export function addEvent() {
  return { type: ADD_EVENT };
}

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id };
}
