import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, FormControl} from 'react-bootstrap';

import {updateValue} from '../state/StateActionCreators';
import {extractMinutesPerUnit} from '../event-context/event-context-utils';
import {withEventValue} from '../utils/dom';
import {VariablePath} from '../variable/VariablePropTypes';
import SelectInt from '../select-int/SelectInt';
import {DateTime} from './TimePropTypes';
import {setMinutes, setHours, changeDate} from '../utils/time';
import './TimePicker.css';

export default connect(extractMinutesPerUnit, mapDispatchToProps)(TimePicker);

TimePicker.propTypes = {
  variablePath: VariablePath.isRequired,
  dateTime: DateTime.isRequired,
  minutesPerUnit: React.PropTypes.number.isRequired,
  buildHandlers: React.PropTypes.func.isRequired
}

export function TimePicker({ dateTime, variablePath, minutesPerUnit, buildHandlers }) {
  const handlers = buildHandlers(variablePath, dateTime);

  return (
    <FormGroup className="TimePicker">
      <FormControl
        type="date"
        value={getDateString(dateTime)}
        onChange={handlers.onDateChange}
      />
      <SelectInt
        end={24}
        selected={dateTime.getHours()}
        onChange={handlers.onHourChange}
        display={pad}
      />
      <SelectInt
        end={60}
        selected={Math.round(dateTime.getMinutes())}
        step={minutesPerUnit}
        onChange={handlers.onMinuteChange}
        display={pad}
      />
    </FormGroup>
  );
}

function pad(integer) {
  return integer < 10 ? `0${integer}` : String(integer);
}

export function mapDispatchToProps(dispatch) {
  return {
    buildHandlers: (variablePath, date) => {
      const handle = func => withEventValue(value =>
        dispatch(updateValue(variablePath, func(value, date)))
      );
      return {
        onHourChange: handle(setHours),
        onMinuteChange: handle(setMinutes),
        onDateChange: handle(changeDate),
      }
    }
  }
}

function getDateString(date) {
  return date.toISOString().substring(0, 10);
}
