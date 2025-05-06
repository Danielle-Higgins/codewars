// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// My solution
function twoHighest(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr[0]];
  const highest = [];
  arr = [...new Set(arr)];
  console.log(arr);
  let max = Math.max(...arr);
  highest.push(max);
  arr.splice(arr.indexOf(max), 1);
  max = Math.max(...arr);
  highest.push(max);
  return highest;
}

// My solution 2
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => a - b).slice(0, 2);
}
