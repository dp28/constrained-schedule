export const CREATE_EVENT = 'CREATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export function createEvent() {
  return { type: CREATE_EVENT };
}

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id };
}
