import React from 'react';

const TimeRange = ({ min, max, minutesPerUnit }) => {
  return (
    <span className="TimeRange">
      <span className="TimeRange-min">{scale(min, minutesPerUnit)}</span>
      to
      <span className="TimeRange-max">{scale(max, minutesPerUnit)}</span>
      minutes
    </span>
  );
};

function scale(time, minutesPerUnit) {
  return time * minutesPerUnit;
}

export default TimeRange;
