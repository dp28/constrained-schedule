export const DateTime = createChainableTypeChecker((props, propName, componentName) => {
  if (!(props[propName] instanceof Date)) {
    return new Error(`Invalid prop "${propName}" supplied to "${componentName}"`);
  }
});

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName) {
    if (props[propName] === null) {
      if (isRequired) {
        return new Error(`Required "${propName}" was not specified in "${componentName}".`);
      }
    }
    else {
      return validate(props, propName, componentName, location);
    }
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
