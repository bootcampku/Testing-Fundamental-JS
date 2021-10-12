let square = (number) =>
  new Promise((res) => setTimeout(() => res(number * number), 0));
let sum = (a, b) => a + b;

module.exports = {
  square,
  sum,
};
