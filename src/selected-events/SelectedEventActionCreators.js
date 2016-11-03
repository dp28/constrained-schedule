export const TOGGLE_EVENT_SELECTED = 'TOGGLE_EVENT_SELECTED';

export function toggleEventSelected(id) {
  return { type: TOGGLE_EVENT_SELECTED, id };
}
