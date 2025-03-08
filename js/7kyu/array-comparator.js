// You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.

// My solution
function matchArrays(v, r) {
  let num = 0;
  v.forEach((item) => {
    if (r.includes(item)) num++;
  });
  return num;
}
