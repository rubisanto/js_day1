function main(arg1, arg2) {
  // tester si arg1 et arg2 sont des nombres
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    return arg1 + arg2;
  } else {
    return "Error: arg1 and arg2 must be numbers";
  }
}

module.exports = main;
