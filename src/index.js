const { square, sum } = require('./math');
const expect = require('./expect');

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

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title} berhasil. \n`);
  } catch (err) {
    console.error(`❌ ${title} gagal.`);
    console.error(`${err.message} \n`);
  }
}
