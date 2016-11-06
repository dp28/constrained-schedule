import {Set} from 'immutable';

import {EXPAND_ELEMENT, UNEXPAND_ELEMENT} from './ExpandableActionCreators';


export default function reduce(selectedIds = Set(), action) {
  switch (action.type) {
    case EXPAND_ELEMENT:   return selectedIds.add(action.id);
    case UNEXPAND_ELEMENT: return selectedIds.delete(action.id);
    default:               return selectedIds;
  }
}
