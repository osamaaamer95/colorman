/**
 *  Capitalize first letter of a string passed as argument
 * @param {string} input String to capitalize
 * @returns Capitalized string
 */
function capitalize(input) {
  return input.substring(0, 1).toUpperCase() + input.substring(1);
}

export default capitalize;
