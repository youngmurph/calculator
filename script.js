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
const numbers = document.getElementsByClassName('number-button');
const button = document.querySelector('button');
const clearAll = document.getElementById('clear-button');
const defaultVal = display.textContent;

function clear() {
    clearAll.addEventListener('click', () => {
        display.textContent = '0';
    })
}

document.querySelector('#numbers').addEventListener('click', () => {
    display.innerHTML = numbers.innerText;
})

let firstNum = {};
let secondNum = {};
let operators = {
    plus : document.getElementById('plus-button'),
    minus : document.getElementById('minus-button'),
    multiplication : document.getElementById('multiply-button'),
    division : document.getElementById('divide-button'),
};

function operate(operator, firstNum, secondNum) {
    if (operator === plus) {
        add(firstNum, secondNum)
    } else if (operator === minus) {
        subtract(firstNum, secondNum)
    } else if (operator === multiplication) {
        multiply(firstNum, secondNum)
    } else {
        divide(firstNum, secondNum)
    }
}