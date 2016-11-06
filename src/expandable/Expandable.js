import React from 'react';
import {connect} from 'react-redux';
import {Button, Glyphicon} from 'react-bootstrap';

import {expandElement, unexpandElement} from './ExpandableActionCreators';
import './Expandable.css'

export default connect(mapStateToProps, mapDispatchToProps)(Expandable);

Expandable.propTypes = {
  expanded: React.PropTypes.node.isRequired,
  isExpanded: React.PropTypes.bool.isRequired,
  toggleExpand: React.PropTypes.func.isRequired,
  unexpanded: React.PropTypes.node,
  alwaysVisible: React.PropTypes.node
}

export function Expandable({ unexpanded, expanded, isExpanded, toggleExpand, alwaysVisible }) {
  return (
    <div className="Expandable">
      <div className="Expandable-always-visible">
        <Expander isExpanded={isExpanded} toggleExpand={toggleExpand} />
        <div className="Expandable-always-visible-content">{alwaysVisible}</div>
      </div>
      {isExpanded || <div className="Expandable-unexpanded">{unexpanded}</div>}
      {isExpanded && <div className="Expandable-expanded">{expanded}</div>}
    </div>
  );
}

function Expander({ toggleExpand, isExpanded }) {
  return (
    <Button bsClass="btn btn-default Expander" onClick={toggleExpand(isExpanded)}>
      <Glyphicon glyph={isExpanded ? 'chevron-down' : 'chevron-right'} />
    </Button>
  );
}

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
