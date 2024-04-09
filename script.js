const add = (x , y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operations = {
    add,
    subtract,
    multiply,
    divide
}

const display = document.getElementById('display');
const operators = document.getElementById('operators');
/* const numbers = document.getElementsByClassName('number-button'); */
const button = document.querySelector('button');
const clearAll = document.getElementById('clear-button'); 
/* const plus = '+';
const minus = '-';
const multiplication = '*';
const division = '/'; */
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

function operate(operator, firstNum, secondNum) {

    if (operator == 'plus') {
       return firstNum + secondNum;
    } else if (operator == 'minus') {
       return firstNum - secondNum;
    } else if (operator == 'multiply') {
       return firstNum * secondNum;
    } else if (operator == 'divide') {
       return firstNum / secondNum;
    }

}

let firstNum = '';
let secondNum = '';
let chosenOperator = '';

function opPress(operator) {

    if (operator == '.' && display.textContent.indexOf('.') === -1) {
        display.textContent += operator;
    } else if (operator == 'AC') {
        display.textContent = 0;
        firstNum = 0;
    } else if (operator == '+') {
        chosenOperator = 'plus';
        firstNum = Number(display.textContent);
        display.textContent = 0;
    } else if (operator == '-') {
        chosenOperator = 'minus';
        firstNum = Number(display.textContent);
        display.textContent = 0;
    } else if (operator == '*') {
        chosenOperator = 'multiply';
        firstNum = Number(display.textContent);
        display.textContent = 0;
    } else if (operator == '/') {
        chosenOperator = 'divide';
        firstNum = Number(display.textContent);
        display.textContent = 0;
    }

    if (firstNum > 0 && operator == '=') {
        secondNum = Number(display.textContent);
    }

    if (operator == '=') {
        let sum = operate(chosenOperator, firstNum, secondNum);
        display.textContent = sum;
    }

}



