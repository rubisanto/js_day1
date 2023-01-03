function myRemoveTail(array) {
  if (array.length == 0) {
    return [];
  }
  array.pop();
  return array;
}

module.exports = myRemoveTail;
