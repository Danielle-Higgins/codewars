// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// My solution
function squareSum(numbers) {
  return numbers
    .map((item) => item ** 2)
    .reduce((sum, current) => sum + current, 0);
}
