// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

// My solution
function keysAndValues(data) {
  const array = [];
  const array2 = [];
  for (const key in data) {
    array.push(key);
    array2.push(data[key]);
  }
  return [array, array2];
}
