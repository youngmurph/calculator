function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let firstNum;
let secondNum;
let operator = document.getElementById('operator-button');

function operate(operator, firstNum, secondNum) {
    if (operator === '+') {
        add(firstNum, secondNum)
    } else if (operator === '-') {
        subtract(firstNum, secondNum)
    } else if (operator === '*') {
        multiply(firstNum, secondNum)
    } else {
        divide(firstNum, secondNum)
    }
}