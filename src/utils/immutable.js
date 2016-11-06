export function removeValue(valueToRemove, list) {
  return list.filterNot(value => value === valueToRemove)
}
