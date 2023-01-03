function firTree(size) {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < x; y++) {
      console.log("*");
    }
  }
}

module.exports = firTree;
