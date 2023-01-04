function myRemoveN(array, index) {
  // If the index is greater than or equal to the length of the array,
  // return the original array
  if (index >= array.length) {
    return array;
  }

  // Remove the item at the specified index using the splice() method
  array.splice(index, 1);

  // Return the modified array
  return array;
}

module.exports = myRemoveN;
