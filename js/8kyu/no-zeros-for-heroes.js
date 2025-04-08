// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

// My solution
function noBoringZeros(n) {
  let string = n.toString();
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== "0") break;
    string = string.slice(0, -1);
  }
  return Number(string);
}
