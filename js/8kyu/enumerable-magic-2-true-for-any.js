// The task is to write a function that accepts two parameters: an array and a callback function (in Ruby: a block).

// The function should return true if the callback function / block returns true for any item in the array, otherwise return false.

// The function should return false if the array is empty.

// My solution
function any(arr, fun) {
  return arr.length === 0 ? false : arr.some((item) => fun(item));
}
