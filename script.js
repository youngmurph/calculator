const display = document.getElementById('display');
const operators = document.getElementById('operators');
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
    } else if (num >= 0 && display.textContent.length < 8) {
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

let firstNum = 0;
let secondNum = 0;
let product = 0;
let chosenOperator = '';
let lastOperator = '';

function opPress(operator) {

    if (operator == '.' && display.textContent.indexOf('.') === -1) {
        display.textContent += operator;
    } else if (operator == 'AC') {
        display.textContent = 0;
        document.getElementById('display').style.fontSize = "60px";
    } else if (operator == '+' && firstNum == 0) {
        chosenOperator = 'plus';
        firstNum = Number(display.textContent);
        display.textContent = 0;
    } else if (operator == '-' && firstNum == 0) {
        chosenOperator = 'minus';
        firstNum = Number(display.textContent);
        display.textContent = 0;
    } else if (operator == '*' && firstNum == 0) {
        chosenOperator = 'multiply';
        firstNum = Number(display.textContent);
        display.textContent = 0;
    } else if (operator == '/' && firstNum == 0) {
        chosenOperator = 'divide';
        firstNum = Number(display.textContent);
        display.textContent = 0;
    }

    if (firstNum > 0 && operator == '+') {
        chosenOperator = 'plus'
        product = Number(display.textContent) + firstNum;
        firstNum = product;
        display.textContent = 0;
    } else if (firstNum > 0 && operator == '-') {
        chosenOperator = 'minus'
        product = Number(display.textContent) - firstNum;
        firstNum = product;
        display.textContent = 0;
    } else if (firstNum > 0 && operator == '*') {
        chosenOperator = 'multiply'
        product = Number(display.textContent) * firstNum;
        firstNum = product;
        display.textContent = 0;
    } else if (firstNum > 0 && operator == '/') {
        chosenOperator = 'divide'
        product = Number(display.textContent) / firstNum;
        firstNum = product;
        display.textContent = 0;
    }

    console.log(firstNum, secondNum);

    if (firstNum > 0 && operator == '=') {
        secondNum = Number(display.textContent);
    }

    if (operator == '=') {
        let sum = operate(chosenOperator, firstNum, secondNum);
        if (Number.isInteger(sum) === true) {
            display.textContent = sum;
            firstNum = 0;
            secondNum = 0;
        } else {
            display.textContent = ((sum * 10) / 10).toFixed(1);
            firstNum = 0;
            secondNum = 0;
        }

        if (display.textContent.length > 5 && display.textContent.length < 8) {
            document.getElementById('display').style.fontSize = "60px";
        } else if (display.textContent.length > 8) {
            document.getElementById('display').style.fontSize = "30px";
        }

    }

}



