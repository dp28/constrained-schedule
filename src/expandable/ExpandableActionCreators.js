export const EXPAND_ELEMENT = 'EXPAND_ELEMENT';
export const UNEXPAND_ELEMENT = 'UNEXPAND_ELEMENT';

export function expandElement(id) {
  return { type: EXPAND_ELEMENT, id };
}

export function unexpandElement(id) {
  return { type: UNEXPAND_ELEMENT, id };
}
