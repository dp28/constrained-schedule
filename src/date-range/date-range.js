import React from 'react';

const DateRange = ({ min, max }) => (
  <span className="DateRange">
    <span className="DateRange-min">{stringify(min)}</span>
    to
    <span className="DateRange-max">{stringify(max)}</span>
  </span>
);

function stringify(date) {
  return date.toString();
}

export default DateRange;
