function mySum(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

module.exports = mySum;

function mySum2(numbers) {
  return numbers.map((number) => number).reduce((a, b) => a + b, 0);
}

function mySum3(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
