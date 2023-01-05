const User = require("./28_myUserClass");

class Admin extends User() {
  constructor(prenom, name, age) {
    super(prenom, name, age);
    this.role = "administateur";
  }
}

module.exports = Admin;
