// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']

// My solution
function arrayLowerCase(arr) {
  return arr.map((item) =>
    typeof item === "string" ? item.toLowerCase() : item
  );
}
