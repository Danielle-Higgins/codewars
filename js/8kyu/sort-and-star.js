// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My solution
function twoSort(s) {
  s.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      // The function compares characters at each position using charCodeAt until a difference is found.
      if (a.charCodeAt(i) !== b.charCodeAt(i)) {
        return a.charCodeAt(i) - b.charCodeAt(i);
      }
    }

    // If all characters are the same, sort by length
    return a.length - b.length;
  });
  return s[0].split("").join("***");
}

// My solution 2
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
