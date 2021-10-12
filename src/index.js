const { square, sum } = require('./math');
const expect = require('./expect');

test('test fungsi kuadrat', () => {
  let result = square(2);
  let expected = 2;

  expect(result).toBe(expected);
});

test('test fungsi pertambahan', () => {
  result = sum(2, 3);
  expected = 5;

  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title} berhasil. \n`);
  } catch (err) {
    console.error(`❌ ${title} gagal.`);
    console.error(`${err.message} \n`);
  }
}
