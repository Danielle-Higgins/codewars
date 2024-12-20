// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// My solution
function highestRank(arr) {
  const counter = {};
  let maxNum = null;
  let highRank = null;

  arr.forEach((item) => {
    if (counter[item]) counter[item]++;
    else counter[item] = 1;
  });

  for (value in counter) {
    if (counter[value] > maxNum) {
      maxNum = counter[value];
      highRank = value;
    } else if (counter[value] === maxNum) {
      highRank = Math.max(highRank, value);
    }
  }
  return +highRank;
}
