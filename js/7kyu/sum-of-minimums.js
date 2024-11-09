// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

// My solution 1
function sumOfMinimums(arr) {
  let minSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      minSum += Math.min(...arr[i]);
      break;
    }
  }
  return minSum;
}

// My solution 2
function sumOfMinimums(arr) {
  let min = Infinity;
  let sum = 0;
  arr.forEach((row) => {
    row.forEach((element) => {
      min = Math.min(...row);
    });
    sum += min;
  });
  return sum;
}
