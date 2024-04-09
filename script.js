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

const display = document.getElementById('display');
const operators = document.getElementById('operators');
/* const numbers = document.getElementsByClassName('number-button'); */
const button = document.querySelector('button');
const clearAll = document.getElementById('clear-button'); 
let defaultVal = 0;
display.textContent = defaultVal;

document.querySelectorAll(".number-button").forEach(element => {
    element.addEventListener('click', () => {
        numPress(element.textContent);
    })
});

document.querySelectorAll(".operator-button").forEach(element => {
    element.addEventListener('click', () => {
        opPress(element.textContent);
    })
});

function numPress(num) {
    if (display.textContent == '0' && num > 0) {
        display.textContent = num;
    } else if (num >= 0 && display.textContent.length < 5) {
        display.textContent += num;
    }
}

function opPress(operator) {
    if (operator == '.') {
        display.textContent += operator;
    } else if (operator == 'AC') {
        display.textContent = 0;
    } else if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
        firstNum = display.textContent;
        display.textContent = 0;
    }

    if (firstNum > 0 && operator == '=') {
        secondNum = display.textContent;
        let sum = operate(operator, firstNum, secondNum);
        display.textContent = sum;
    }
}

let firstNum = {};
let secondNum = {};
let operator = {
    plus : document.getElementById('plus-button'),
    minus : document.getElementById('minus-button'),
    multiplication : document.getElementById('multiply-button'),
    division : document.getElementById('divide-button'),
};

function operate(operator, firstNum, secondNum) {
    if (operator === '+') {
        add(firstNum, secondNum)
    } else if (operator === '-') {
        subtract(firstNum, secondNum)
    } else if (operator === '*') {
        multiply(firstNum, secondNum)
    } else if (operator === '/') {
        divide(firstNum, secondNum)
    }
}