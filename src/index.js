const { square, sum } = require('./math');
const expect = require('./expect');

let result = square(2);
let expected = 4;

expect(result).toBe(expected);

result = sum(2, 3);
expected = 5;

expect(result).toBe(expected);
