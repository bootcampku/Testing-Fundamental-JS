function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title} berhasil. \n`);
  } catch (err) {
    console.error(`❌ ${title} gagal.`);
    console.error(`${err.message} \n`);
  }
}

module.exports = {
  expect,
  test,
};
