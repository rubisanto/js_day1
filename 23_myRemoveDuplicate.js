function myRemoveDuplicate(array) {
  // Create a Set from the array
  // A Set only allows unique values, so any duplicates will be removed
  const set = new Set(array);

  // Use the spread operator to convert the Set back to an array
  return [...set];
}

module.exports = myRemoveDuplicate;
