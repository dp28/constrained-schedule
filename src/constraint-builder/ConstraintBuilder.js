import React from 'react';
import {connect} from 'react-redux';
import {Panel, Button} from 'react-bootstrap';

import SelectedEvents from '../selected-events/SelectedEvents';
import {getSelectedEvents} from '../selected-events/SelectedEventSelectors';
import {canCreateConstraints} from '../constraint/ConstraintSelectors';
import {createConstraint} from '../constraint/ConstraintActionCreators';

export const ConstraintBuilder = ({ create, selectedEvents, cannotCreateConstraints }) => (
  <Panel className="ConstraintBuilder">
    Selected events:
    <SelectedEvents events={selectedEvents} />
    <Button
      bsStyle="primary"
      onClick={create(selectedEvents)}
      disabled={cannotCreateConstraints}
    >
      Create constraint
    </Button>
  </Panel>
)

export function mapStateToProps(state) {
  return {
    selectedEvents: getSelectedEvents(state),
    cannotCreateConstraints: !canCreateConstraints(state)
  };
}

export function mapDispatchToProps(dispatch) {
  return { create: events => () => dispatch(createConstraint(events))}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintBuilder);
