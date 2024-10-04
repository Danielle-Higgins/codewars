/**
 * Define a function that removes duplicates from an array of non negative numbers and
 * returns it as a result.
 */

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// My solution 1
function distinct(a) {
  let result = [];
  a.forEach((item) => {
    if (!result.includes(item)) result.push(item);
  });
  return result;
}

// My solution 2
function distinct(a) {
  return a.filter((item, index) => a.indexOf(item) === index);
}
