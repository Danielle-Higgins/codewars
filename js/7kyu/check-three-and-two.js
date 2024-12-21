// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// My solution
function checkThreeAndTwo(array) {
  const counter = {};

  array.forEach((item) => {
    if (counter[item]) counter[item]++;
    else counter[item] = 1;
  });

  for (value in counter) {
    if (counter[value] !== 2 && counter[value] !== 3) return false;
  }
  return true;
}
