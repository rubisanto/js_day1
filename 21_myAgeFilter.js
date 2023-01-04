function myAgeFilter(ages) {
  // Use the filter() method to return a new array containing only the ages
  // that are greater than or equal to 18
  return ages.filter((age) => age >= 18);
}

module.exports = myAgeFilter;
