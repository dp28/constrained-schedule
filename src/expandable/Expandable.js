import React from 'react';
import {connect} from 'react-redux';
import {Button, Glyphicon} from 'react-bootstrap';

import {expandElement, unexpandElement} from './ExpandableActionCreators';

const Expander = ({ toggleExpand, isExpanded }) => (
  <Button onClick={toggleExpand(isExpanded)}>
    <Glyphicon glyph={isExpanded ? 'chevron-down' : 'chevron-right'} />
  </Button>
)

export const Expandable = ({ unexpanded, expanded, isExpanded, toggleExpand, alwaysVisible }) => (
  <div className="expandable">
    <Expander isExpanded={isExpanded} toggleExpand={toggleExpand} />
    <div className="Expandable-always-visible">{alwaysVisible}</div>
    {isExpanded || <div className="Expandable-unexpanded">{unexpanded}</div>}
    {isExpanded && <div className="Expandable-expanded">{expanded}</div>}
  </div>
)

export function mapStateToProps(state, { id }) {
  return {
    isExpanded: state.get('expandedIds').includes(id)
  };
}
export function mapDispatchToProps(dispatch, { id }) {
  return {
    toggleExpand: isExpanded => () => (
      dispatch(isExpanded ? unexpandElement(id) : expandElement(id))
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Expandable);
