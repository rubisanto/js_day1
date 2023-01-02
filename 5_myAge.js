function myAge(age) {
  if (typeof age === "number" && age > 0) {
    if (age >= 18) {
      return "Majeur";
    } else if (age < 18 && age > 0) {
      return "Mineur";
    } else {
      return "Error: age must be a positive number";
    }
  } else {
    return "Error: age must be a positive number";
  }
}

module.exports = myAge;
