// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// My solution
function evenLast(numbers) {
  const evenSum = numbers
    .filter((item, index) => index % 2 === 0)
    .reduce((sum, item) => sum + item, 0);
  return numbers.length <= 0 ? 0 : evenSum * numbers[numbers.length - 1];
}
