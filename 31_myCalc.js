class Calc {
  constructor() {
    this.result = null;
    this.history = [];
  }

  compute(expression) {
    // Split the expression into an array of tokens
    let tokens = expression.split(/\s+/);

    // Stack for numbers
    let values = [];

    // Stack for operators
    let ops = [];

    for (let i = 0; i < tokens.length; i++) {
      // Current token
      let token = tokens[i];

      if (this.isNumber(token)) {
        // If the token is a number, push it to the values stack
        values.push(Number(token));
      } else if (this.isOperator(token)) {
        // If the token is an operator, push it to the ops stack
        ops.push(token);
      } else if (token === "(") {
        // If the token is a left parenthesis, push it to the ops stack
        ops.push(token);
      } else if (token === ")") {
        // If the token is a right parenthesis,
        // pop the ops stack until the corresponding left parenthesis is found
        while (ops[ops.length - 1] !== "(") {
          let op = ops.pop();
          let val2 = values.pop();
          let val1 = values.pop();
          values.push(this.applyOp(op, val1, val2));
        }
        ops.pop();
      }
    }

    // Perform remaining operations until the ops stack is empty
    while (ops.length > 0) {
      let op = ops.pop();
      let val2 = values.pop();
      let val1 = values.pop();
      values.push(this.applyOp(op, val1, val2));
    }

    // The result is the top of the values stack
    let result = values.pop();
    this.result = result;
    this.history.push(`${expression}=${result}`);
    return `${expression}=${result}`;
  }

  isNumber(token) {
    return !isNaN(Number(token));
  }

  isOperator(token) {
    return ["+", "-", "*", "/"].indexOf(token) !== -1;
  }

  applyOp(op, val1, val2) {
    if (op === "+") {
      return val1 + val2;
    } else if (op === "-") {
      return val1 - val2;
    } else if (op === "*") {
      return val1 * val2;
    } else if (op === "/") {
      return val1 / val2;
    }
  }

  lastResult() {
    return this.result;
  }

  history() {
    return this.history;
  }
}

module.exports = Calc;
