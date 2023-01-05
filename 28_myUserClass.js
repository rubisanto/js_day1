class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  presentation() {
    return `Je m'apelle ${this.surname} ${this.name}, j'ai ${this.age} ans`;
  }
}

module.exports = User;
