export function extractMinutesPerUnit(state) {
  return { minutesPerUnit: state.getIn(['eventContext', 'minutesPerUnit']) };
}
