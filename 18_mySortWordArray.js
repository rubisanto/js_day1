function mySortWordArray(string) {
  // Check if the string is empty
  if (string === "") {
    // Return an empty array if the string is empty
    return [];
  }
  // Split the string into an array and sort it
  let array = string.split(" ");
  array.sort();
  return array;
}

module.exports = mySortWordArray;
