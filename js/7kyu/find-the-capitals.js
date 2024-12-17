// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// My solution
var capitals = function (word) {
  const array = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) array.push(i);
  }
  return array;
};
