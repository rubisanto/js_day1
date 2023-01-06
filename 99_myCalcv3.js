class Calc {
  constructor() {
    this.result = null;
    this.history = [];
  }

  compute(expression) {
    // Split the expression into an array of tokens
    let tokens = this.tokenize(expression);

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
        // If the token is an operator,
        // pop the ops stack until the top operator has lower precedence than the current operator
        while (
          ops.length > 0 &&
          this.getPrecedence(ops[ops.length - 1]) > this.getPrecedence(token)
        ) {
          let op = ops.pop();
          let val2 = values.pop();
          let val1 = values.pop();
          values.push(this.applyOp(op, val1, val2));
        }
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

  tokenize(expression) {
    let tokens = [];
    let currentToken = "";
    let currentChar;
    for (let i = 0; i < expression.length; i++) {
      currentChar = expression[i];
      if (
        this.isNumber(currentChar) ||
        (currentChar === "-" && i > 0 && this.isOperator(expression[i - 1]))
      ) {
        currentToken += currentChar;
      } else {
        if (currentToken !== "") {
          tokens.push(currentToken);
        }
        currentToken = "";
        tokens.push(currentChar);
      }
    }
    if (currentToken !== "") {
      tokens.push(currentToken);
    }
    return tokens;
  }

  isNumber(token) {
    return !isNaN(Number(token));
  }

  isOperator(token) {
    return ["+", "-", "*", "/"].indexOf(token) !== -1;
  }

  getPrecedence(op) {
    if (op === "+" || op === "-") {
      return 1;
    } else if (op === "*" || op === "/") {
      return 2;
    } else {
      return 0;
    }
  }

  applyOp(op, val1, val2) {
    if (op === "+") {
      return val1 + val2;
    } else if (op === "-") {
      return val1 - val2;
    } else if (op === "*") {
      return val1 * val2;
    } else if (op === "/") {
      if (val2 === 0) {
        throw new Error("Cannot divide by zero");
      }
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
