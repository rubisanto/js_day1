class Calc {
  constructor() {
    this.result = 0;
    this.history = [];
  }

  compute(operation) {
    const elements = operation.split(" ");

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
