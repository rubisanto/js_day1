function firTree(rows) {
  for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = 0; j < rows - i - 1; j++) {
      line += " ";
    }
    for (let k = 0; k <= 2 * i; k++) {
      line += "*";
    }
    console.log(line);
  }
}

module.exports = firTree;
