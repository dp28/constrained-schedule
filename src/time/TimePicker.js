import React from 'react';
import {connect} from 'react-redux';
import {FormGroup} from 'react-bootstrap';

import {updateValue} from '../state/StateActionCreators';
import {extractMinutesPerUnit} from '../event-context/event-context-utils';
import {withEventValue} from '../utils/dom';
import SelectInt from '../select-int/SelectInt';

import './TimePicker.css';

export const TimePicker = ({ dateTime, variablePath, minutesPerUnit, onHourChange, onMinuteChange }) => (
  <FormGroup className="TimePicker">
    <SelectInt
      end={24}
      selected={dateTime.getHours()}
      onChange={onHourChange(variablePath, dateTime)}
      display={pad}
    />
    <SelectInt
      end={60}
      selected={Math.round(dateTime.getMinutes())}
      step={minutesPerUnit}
      onChange={onMinuteChange(variablePath, dateTime)}
      display={pad}
    />
  </FormGroup>
);

function pad(integer) {
  return integer < 10 ? `0${integer}` : String(integer);
}

function mapDispatchToProps(dispatch) {
  return {
    onHourChange: (variablePath, date) => withEventValue(hours => (
      dispatch(updateValue(variablePath, addHours(hours, date)))
    )),
    onMinuteChange: (variablePath, date) => withEventValue(minutes => (
      dispatch(updateValue(variablePath, addMinutes(minutes, date)))
    ))
  };
}

function addHours(hours, date) {
  const copy = copyDate(date);
  copy.setHours(hours);
  return copy;
}

function addMinutes(minutes, date) {
  const copy = copyDate(date);
  copy.setMinutes(minutes);
  return copy;
}

function copyDate(date) {
  return new Date(date.getTime());
}

export default connect(extractMinutesPerUnit, mapDispatchToProps)(TimePicker);
