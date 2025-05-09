// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, et cetera).

// My solution
function getSize(width, height, depth) {
  const volume = width * height * depth;
  const sa = 2 * depth * height + 2 * depth * width + 2 * width * height;
  return [sa, volume];
}
