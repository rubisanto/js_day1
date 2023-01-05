function myObjectValues(obj) {
  return Object.keys(obj)
    .map((key) => `${key}: ${obj[key]}`)
    .join(", ");
}

module.exports = myObjectValues;
