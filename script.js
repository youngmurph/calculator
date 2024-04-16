const display = document.getElementById('display');
const numbers = document.getElementsByClassName('.number-button');
const operators = document.getElementById('operators');
const button = document.querySelector('button');
const clearAll = document.getElementById('clear-button'); 
display.textContent = 0;

let firstNum = 0;
let secondNum = 0;
let result = 0;
let chosenOperator = '';


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
    if (display.textContent.length > 1) {
        display.textContent += num;
    } else if (display.textContent == 0 && num > 0) {
        display.textContent = num;
    } else if (num >= 0 && display.textContent.length < 8) {
        display.textContent += num;
    }
}

function operate(firstNum, secondNum, operator) {

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

function opPress(operator) {

    if (operator == 'AC') {
        display.textContent = 0;
        firstNum = 0;
        secondNum = 0;
    }

    if (operator == '.' && display.textContent > 0) {
        display.textContent += '.';
    }

    if (operator == '+' && firstNum == 0) {
        firstNum = parseFloat(display.textContent);
        chosenOperator = 'plus';
        display.textContent = 0;
    } else if (operator == '-' && firstNum == 0) {
        firstNum = parseFloat(display.textContent);
        chosenOperator = 'minus';
        display.textContent = 0;
    }  else if (operator == '*' && firstNum == 0) {
        firstNum = parseFloat(display.textContent);
        chosenOperator = 'multiply';
        display.textContent = 0;
    }  else if (operator == '/' && firstNum == 0) {
        firstNum = parseFloat(display.textContent);
        chosenOperator = 'divide';
        display.textContent = 0;
    } else if (operator == '=') {
        secondNum = parseFloat(display.textContent);
        const result = operate(firstNum, secondNum, chosenOperator);
        firstNum = result;
        if (Number(result).isInteger === false) {
            display.textContent = Number(result).toFixed(1);
        } else {
            display.textContent = result;
        }
    }

    if (firstNum == result && operator == '=') {
        secondNum = parseFloat(display.textContent);
        result = operate(firstNum, secondNum, chosenOperator);
        firstNum = result;
        if (Number(result).isInteger === false) {
            display.textContent = Number(result).toFixed(1);
        } else {
            display.textContent = result;
        }
    }

}


