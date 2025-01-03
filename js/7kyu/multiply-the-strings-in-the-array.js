// You received an array with two strings.
// Create a function that will return their product as a string.
// E.g.

// input: ['3', '5'] => output: '15'
// input: ['2', '-3'] => output: '-6'
// input: ['9', '0'] => output: '0'

// My solution
function arrMultiply(arr) {
  return arr.reduce((acc, item) => +acc * +item, 1).toString();
}

// My solution 2
function arrMultiply(arr) {
  return (arr[0] * arr[1]).toString();
}
