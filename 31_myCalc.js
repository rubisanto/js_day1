class Calc {
  constructor() {
    this.result = 0;
    this.history = [];
    this.error = "";
  }

  compute(operation) {
    // controler que ce qu'il y a dans operation est bien un nombre et un opérateur
    const validCharacters = /^[0-9+-/*]+$/;
    operation = parseInt(operation);
    if (!validCharacters.test(operation)) {
      this.error = "Error: Invalid input string";
      return this.error;
    }
    // remettre operation en string
    operation = operation.toString();

    const elements = operation.split(" ");
    // si y a un opérateur faire une fonction spécifique
    const operators = elements.filter((element) =>
      ["+", "-", "/", "*"].includes(element)
    );

    operators.forEach((element, index) => {
      switch (element) {
        case "+":
          // Do something specific for the + operator
          this.result =
            parseInt(elements[index - 1]) + parseInt(elements[index + 1]);
          break;
        case "-":
          // Do something specific for the - operator
          this.result =
            parseInt(elements[index - 1]) - parseInt(elements[index + 1]);

          break;
        case "/":
          // Do something specific for the / operator
          if (parseInt(elements[index + 1]) != 0) {
            this.result =
              parseInt(elements[index - 1]) / parseInt(elements[index + 1]);
          } else {
            this.error = "Error: Division by 0";
            return this.error;
          }

          break;
        case "*":
          // Do something specific for the * operator
          this.result =
            parseInt(elements[index - 1]) * parseInt(elements[index + 1]);
          break;
      }
    });
    // interdiction d'utiliser eval
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
