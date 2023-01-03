function myEvilPow(x, y) {
  if (y === 0) {
    return 1;
  }

  return x * myEvilPow(x, y - 1);
}

module.exports = myEvilPow;
