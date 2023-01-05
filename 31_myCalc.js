class Calc {
  constructor() {
    this.result = 0;
    this.history = [];
  }

  compute(operation) {
    const elements = operation.split(" ");
    // si y a un opérateur faire une fonction spécifique
    const operators = elements.filter((element) =>
      ["+", "-", "/", "*"].includes(element)
    );

    operators.forEach((element, index) => {
      switch (element) {
        case "+":
          // Do something specific for the + operator
          break;
        case "-":
          // Do something specific for the - operator
          break;
        case "/":
          // Do something specific for the / operator
          break;
        case "*":
          // Do something specific for the * operator
          break;
      }
    });
    // this.result = eval(operation);
    this.history.push(this.result);
    return `${operation} = ${this.result}`;
  }

  lastResult() {
    return this.result;
  }

  history() {
    return this.history;
  }
}

module.exports = Calc;
