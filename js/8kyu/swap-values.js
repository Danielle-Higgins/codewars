// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// My solution
function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  const temp = args[0][0];
  args[0][0] = args[0][1];
  args[0][1] = temp;
}

// My solution 2
function swapValues(arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}
