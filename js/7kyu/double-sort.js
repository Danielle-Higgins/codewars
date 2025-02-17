// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

// My solution
function dbSort(a) {
  const nums = [];
  const strings = [];
  a.forEach((item) => {
    if (typeof item === "number") nums.push(item);
    else strings.push(item);
  });
  nums.sort((a, b) => a - b);
  strings.sort();
  return [...nums, ...strings];
}

// My solution 2
function dbSort(a) {
  const nums = a
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);
  const strings = a.filter((item) => typeof item === "string").sort();
  return [...nums, ...strings];
}
