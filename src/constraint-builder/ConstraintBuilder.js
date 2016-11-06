import React from 'react';
import {connect} from 'react-redux';
import {Panel, Button} from 'react-bootstrap';

import EventList from '../event-list/EventList';
import SelectConstraintType from '../constraint-type/SelectConstraintType';
import {getSelectedType} from '../constraint-type/ConstraintTypeSelectors';
import {selectConstraintType} from '../constraint-type/ConstraintTypeActionCreators';
import {getSelectedEvents} from '../selected-events/SelectedEventSelectors';
import {canCreateConstraints} from '../constraint/ConstraintSelectors';
import {createConstraint} from '../constraint/ConstraintActionCreators';
import * as EventPropTypes from '../constrained-event/ConstrainedEventPropTypes';

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintBuilder);

ConstraintBuilder.propTypes = {
  create: React.PropTypes.func.isRequired,
  selectType: React.PropTypes.func.isRequired,
  selectedEvents: EventPropTypes.EventList.isRequired,
  selectedType: React.PropTypes.string.isRequired,
  cannotCreateConstraints: React.PropTypes.bool.isRequired
}

export function ConstraintBuilder({
  selectedEvents,
  selectedType,
  cannotCreateConstraints,
  create,
  selectType
}) {
  return (
    <Panel className="ConstraintBuilder">
      Constraint type:
      <SelectConstraintType onChange={selectType} selected={selectedType} />
      Selected events:
      <EventList events={selectedEvents} />
      <Button
        bsStyle="primary"
        onClick={create(selectedEvents, selectedType)}
        disabled={cannotCreateConstraints}
      >
        Create constraint
      </Button>
    </Panel>
  );
}

export function mapStateToProps(state) {
  return {
    selectedEvents: getSelectedEvents(state),
    selectedType: getSelectedType(state),
    cannotCreateConstraints: !canCreateConstraints(state)
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    create: (events, selectedType) => () => dispatch(createConstraint(events, selectedType)),
    selectType: type => dispatch(selectConstraintType(type))
  }
}
