// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// My solution
function averageString(str) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const arrayOfNums = str.split(" ").map((item) => numbers[item]);
  const avg =
    arrayOfNums.reduce((sum, item) => sum + item, 0) / arrayOfNums.length;

  if (str === "" || arrayOfNums.includes(undefined)) return "n/a";

  for (let key in numbers) {
    if (numbers[key] === Math.floor(avg)) return key;
  }
}
