const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const modulo = document.querySelector('#modulo');
const radical = document.querySelector('#radical');
const point = document.querySelector('#point');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const result = document.querySelector('.result');
const history = document.querySelector('.history');

let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let isFirstNumber = true;
let lastOperator = "";
let pointNumber = false;

function buildNumber(digit) {
    if (digit === "." || pointNumber) {
        if (isFirstNumber) {
            firstNumber = firstNumber + digit;
            result.innerText = firstNumber;
        } else {
            secondNumber = secondNumber + digit;
            result.innerText = secondNumber;
        } 
        pointNumber = true;
    }
    else if (isFirstNumber) {
        firstNumber = (firstNumber * 10) + digit;
        result.innerText = firstNumber;
    } else {
        secondNumber = (secondNumber * 10) + digit;
        result.innerText = secondNumber;
    } 
}

for(let i=0; i<=9; i++) {
    document.querySelector('#digit'+i).addEventListener('click', function() {
        buildNumber(i);
    });
}

point.addEventListener('click', function() {
    buildNumber(".");
});

function multipleOperations() {
    if (lastOperator !== "") {
        firstNumber = operation(lastOperator);
        secondNumber = 0;
    }
    
    lastOperator = operator;
    history.innerText = `${firstNumber} ${operator}`;
}

multiply.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "*";
    multipleOperations();
});

add.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "+";
    result.innerText = operator;
    multipleOperations();
});

subtract.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "-";
    result.innerText = operator;
    multipleOperations();
});

divide.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "/";
    result.innerText = operator;
    multipleOperations();
});

modulo.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "%";
    result.innerText = operator;
    multipleOperations();
});

radical.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "√";
    result.innerText = operator;
    history.innerText = `${firstNumber} ${operator}`;
});

equals.addEventListener('click', function() {
    res = operation(operator);
    result.innerText = res;
    firstNumber = res;
    secondNumber = 0;
    operator = '';
});

clear.addEventListener('click', function() {
    result.innerText = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    isFirstNumber = true;
    history.innerText = "";
    lastOperator = "";
})

function operation(operator) {
    let res = 0;
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);
    switch (operator) {
        case '*':
            res = firstNumber * secondNumber;
            break;
        case '+':
            res = firstNumber + secondNumber;
            break;
        case '-':
            res = firstNumber - secondNumber;
            break;
        case '/':
            res = firstNumber / secondNumber;
            break;
        case '%':
            res = firstNumber % secondNumber;
            break;
        case '√':
            res = Math.sqrt(firstNumber);
            break;
        default:
            alert("Stop");
    }
    return res;
}