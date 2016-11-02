export const DELETE_EVENT = 'DELETE_EVENT';

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id };
}
