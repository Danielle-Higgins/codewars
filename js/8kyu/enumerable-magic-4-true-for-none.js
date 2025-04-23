// Write a function that takes two arguments: an array and a callback function (in Ruby: a block).

// The function should return true if the callback / block returns false for all of the items in the array, or if the array is empty; otherwise return false.

// My solution
function none(arr, fun) {
  if (arr.length === 0) return true;
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) return false;
  }
  return true;
}
