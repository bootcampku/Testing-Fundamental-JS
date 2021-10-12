const { square, sum } = require('./math');

test('test fungsi kuadrat', async () => {
  let result = await square(2);
  let expected = 2;

  expect(result).toBe(expected);
});

test('test fungsi pertambahan', () => {
  result = sum(2, 3);
  expected = 5;

  expect(result).toBe(expected);
});
