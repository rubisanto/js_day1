function myObjectValues(obj) {
  return (
    Object.keys(obj)
      .map((key) => `${key}: ${obj[key]}`)
      // le join permet de renvoyer un string
      .join(", ")
  );
}

module.exports = myObjectValues;
