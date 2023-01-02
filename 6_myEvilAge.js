function myEvilAge(age) {
  // convert age to a number
  age = Number(age);

  if (age >= 18) {
    return "Majeur";
  } else if (age < 18 && age > 0) {
    return "Mineur";
  } else {
    return "Error: age must be a positive number";
  }
}

module.exports = myEvilAge;
