function myObjectValues(obj) {
  return (
    Object.keys(obj)
      .filter(
        (key) =>
          typeof obj[key] !== "function" &&
          !Array.isArray(obj[key]) &&
          typeof obj[key] !== "object"
      )
      .map((key) => `${key}: ${obj[key]}`)
      // le join permet de renvoyer un string
      .join(", ")
  );
}

module.exports = myObjectValues;
