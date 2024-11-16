// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// My solution
function swap(string) {
  const array = string.split("");
  for (let i = 0; i < array.length; i++) {
    if ("aeiou".includes(array[i])) {
      array[i] = array[i].toUpperCase();
    }
  }
  string = array.join("");
  return string;
}

// My solution 2
function swap(string) {
  return string
    .split("")
    .map((item) => ("aeiou".includes(item) ? item.toUpperCase() : item))
    .join("");
}
