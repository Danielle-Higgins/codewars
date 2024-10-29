// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// My solution
function doubleChar(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    string = string + str[i] + str[i];
  }
  return string;
}

// My solution 2
function doubleChar(str) {
  return str
    .split("")
    .map((item) => item + item)
    .join("");
}
