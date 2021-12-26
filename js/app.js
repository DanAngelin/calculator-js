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
    if (isFirstNumber) {
        if(Number.isInteger(firstNumber) && digit !== ".") {
            firstNumber = (firstNumber * 10) + digit;
        } else {
            firstNumber = firstNumber + digit;
        }
        result.innerText = firstNumber;
    } else {
        if(Number.isInteger(secondNumber) && digit !== ".") {
            secondNumber = (secondNumber * 10) + digit;
        } else {
            secondNumber = secondNumber + digit;
        }
        result.innerText = secondNumber;
    } 
}

for (let i=0; i<=9; i++) {
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
    let number = 0;
    if (secondNumber) {
        number = secondNumber;
    } else {
        number = firstNumber;
    }
    result.innerText = operation(operator);
    operator = lastOperator;
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
            if (secondNumber === 0) {
                return res = "Cannot divide by zero"
            } else {
                res = firstNumber / secondNumber;
            }
            break;
        case '%':
            res = firstNumber % secondNumber;
            break;
        case '√':
            if (secondNumber) {
                res = Math.sqrt(secondNumber);
                secondNumber = res;
            } else {
                res = Math.sqrt(firstNumber);
                firstNumber = res;
            }
            break;
        default:
            alert("An invalid format was used !");
    }
    history.innerText = parseFloat(res.toPrecision(6));
    return parseFloat(res.toPrecision(6));
}

let time = new Date();
let year = time.getFullYear();
document.querySelector('.year').innerText = `${year}`;