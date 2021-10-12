const { square, sum } = require('./math');
const { test, expect } = require('./utils');

test('test fungsi kuadrat', async () => {
  let result = await square(2);
  let expected = 4;

  expect(result).toBe(expected);
});

test('test fungsi pertambahan', () => {
  result = sum(2, 3);
  expected = 5;

  expect(result).toBe(expected);
});
