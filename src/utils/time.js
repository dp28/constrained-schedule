export function setHours(hours, date) {
  const copy = copyDate(date);
  copy.setHours(hours);
  return copy;
}

export function setMinutes(minutes, date) {
  const copy = copyDate(date);
  copy.setMinutes(minutes);
  return copy;
}

export function changeDate(dateString, date) {
  const newDate = new Date(dateString);
  newDate.setHours(date.getHours());
  newDate.setMinutes(date.getMinutes());
  return newDate;
}

export function buildTimeRange(minHour, maxHour, date = new Date()) {
  const source = setMinutes(0, date);
  return {
    min: setHours(minHour, source),
    max: setHours(maxHour, source)
  };
}

function copyDate(date) {
  return new Date(date.getTime());
}
