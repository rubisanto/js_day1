function mySortWordArray(string) {
  let array;
  // en ternaire retourner tableau vide si string vide
  string === "" ? (array = []) : array;
  array = string.split(" ");
  array.sort();
  return array;
}

module.exports = mySortWordArray;
