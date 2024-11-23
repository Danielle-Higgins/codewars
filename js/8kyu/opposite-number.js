// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// My solution
function opposite(number) {
  if (number < 0) return Math.abs(number);
  return -number;
}

// My solution 2
function opposite(number) {
  return number < 0 ? Math.abs(number) : -number;
}
