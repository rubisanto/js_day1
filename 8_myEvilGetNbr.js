function myEvilGetNbr(arg) {
  arg = Number(arg);

  if (typeof arg === "number") {
    // return + if arg is positive
    if (arg > 0) {
      return "+";
    }
    // return - if arg is negative
    else if (arg < 0) {
      return "-";
    }
    // return 0 if arg is 0
    else {
      return "0";
    }
  } else {
    return "Error: arg must be a number";
  }
}

module.exports = myEvilGetNbr;
