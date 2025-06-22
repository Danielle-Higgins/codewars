// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My solution
function divCon(x) {
  const nums = x
    .filter((num) => typeof num === "number")
    .reduce((acc, num) => acc + num, 0);
  const strs = x
    .filter((num) => typeof num === "string")
    .reduce((acc, num) => +acc + +num, 0);

  return nums - strs;
}
