class User {
  constructor(surname, name, age) {
    this.surname = surname;
    this.name = name;
    this.age = age;
  }
  presentation() {
    return `Je m'apelle ${this.surname} ${this.name}, j'ai ${this.age} ans`;
  }
}

module.exports = User;
