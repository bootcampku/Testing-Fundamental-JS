let square = (number) => number * number;

let results = square(2);
let expected = 4;

if (results === expected) {
  console.log('Test passes.');
} else {
  throw new Error('Test failed.');
}
