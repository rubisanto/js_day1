class User {
  constructor(prenom, name, age) {
    this.prenom = prenom;
    this.name = name;
    this.age = age;
  }
  presentation() {
    return `Je m'apelle ${this.prenom} ${this.name}, j'ai ${this.age} ans`;
  }
}

module.exports = User;
