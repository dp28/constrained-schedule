import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';

import {getIsEventSelected} from '../selected-events/SelectedEventSelectors';
import {toggleEventSelected} from '../selected-events/SelectedEventActionCreators';
import {Event} from './ConstrainedEventPropTypes';

export default connect(mapStateToProps, mapDispatchToProps)(ConstrainedEventSummary);

ConstrainedEventSummary.propTypes = {
  event: Event.isRequired,
  toggleSelected: React.PropTypes.func.isRequired,
  isSelected: React.PropTypes.bool.isRequired
}

export function ConstrainedEventSummary({ event, toggleSelected, isSelected }) {
  return (
    <div className="ConstrainedEvent-summary">
      <p>{event.get('name')}</p>
      <Button onClick={toggleSelected}>
        <Glyphicon glyph={isSelected ? 'check' : 'unchecked'} />
      </Button>
    </div>
  );
}

export function mapStateToProps(state, { event }) {
  return {
    isSelected: getIsEventSelected(state)(event.get('id'))
  };
}

export function mapDispatchToProps(dispatch, { event }) {
  return {
    toggleSelected: () => dispatch(toggleEventSelected(event.get('id')))
  }
}
