export function withEventValue(func) {
  return ({ target }) => func(target.value);
}
