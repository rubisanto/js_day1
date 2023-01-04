function mySortWordArray(string) {
  // en ternaire retourner tableau vide si string vide
  if (string === "") {
    array = [];
  } else {
    array = string.split(" ");
    array.sort();
    return array;
  }
}

module.exports = mySortWordArray;
