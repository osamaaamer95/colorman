/**
 *  Capitalize first letter of a string passed as argument
 * @param {string} input String to capitalize
 * @returns {string} Capitalized string
 */
function capitalize(input: string): string {
  try {
    return input.substring(0, 1).toUpperCase() + input.substring(1);
  } catch (error) {
    throw new Error("Input is not a string");
  }
}

export default capitalize;
