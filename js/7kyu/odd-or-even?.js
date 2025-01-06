// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// My solution
function oddOrEven(array) {
  // PREP

  // P: [] of nums
  // R: a string "odd" or "even"
  // E: oddOrEven([0,1,4]) --> 0+1+4 = 5 --> "odd"

  // loop through array
  // sum the elements
  // divisible by 2 --> even

  let sum = 0;
  array.forEach((item) => (sum += item));
  if (sum % 2 === 0) return "even";
  else return "odd";
}

// My solution 2
function oddOrEven(array) {
  // PREP

  // P: [] of nums
  // R: a string "odd" or "even"
  // E: oddOrEven([0,1,4]) --> 0+1+4 = 5 --> "odd"

  // loop through array
  // sum the elements
  // divisible by 2 --> even

  const sum = array.reduce((acc, item) => acc + item, 0);
  if (sum % 2 === 0) return "even";
  else return "odd";
}

// My solution 3
function oddOrEven(array) {
  // PREP

  // P: [] of nums
  // R: a string "odd" or "even"
  // E: oddOrEven([0,1,4]) --> 0+1+4 = 5 --> "odd"

  // loop through array
  // sum the elements
  // divisible by 2 --> even

  const sum = array.reduce((acc, item) => acc + item, 0);
  return sum % 2 === 0 ? "even" : "odd";
}
