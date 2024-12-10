// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// My solution
function cubeOdd(arr) {
  if (arr.some((item) => typeof item !== "number")) return undefined;
  return arr
    .filter((item) => item % 2 !== 0)
    .map((item) => item ** 3)
    .reduce((sum, item) => sum + item, 0);
}
