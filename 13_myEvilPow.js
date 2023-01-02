function myEvilPow(a, b) {
  if (a === 0) {
    return 1;
  }

  return a * myEvilPow(a, b - 1);
}

module.exports = myEvilPow;
