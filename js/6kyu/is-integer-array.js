// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

// My solution
function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  return arr.every((item) => Number.isInteger(item));
}
