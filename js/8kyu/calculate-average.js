// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// My solution
function findAverage(array) {
  if (array.length === 0) return 0;
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  return sum / array.length;
}

// My solution 2
function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((sum, item) => sum + item, 0) / array.length;
}
