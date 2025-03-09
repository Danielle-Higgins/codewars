// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My solution
function well(x) {
  const newArray = [];

  x.forEach((item) => {
    if (item === "good") newArray.push(item);
  });

  if (newArray.length === 0) return "Fail!";
  else if (newArray.length === 1 || newArray.length === 2) return "Publish!";
  else return "I smell a series!";
}

// My solution 2
function well(x) {
  const newArray = x.filter((item) => item === "good");
  if (newArray.length === 0) return "Fail!";
  else if (newArray.length === 1 || newArray.length === 2) return "Publish!";
  else return "I smell a series!";
}
