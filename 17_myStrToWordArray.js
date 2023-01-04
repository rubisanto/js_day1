function myStrToWordArray(string) {
  // en ternaire retourner tableau vide si string vide
  return string === "" ? [] : string.split(" ");
}

module.exports = myStrToWordArray;
