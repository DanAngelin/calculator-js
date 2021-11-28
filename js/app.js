const digit0 = document.querySelector('#digit0');
const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const digit4 = document.querySelector('#digit4');
const digit5 = document.querySelector('#digit5');
const digit6 = document.querySelector('#digit6');
const digit7 = document.querySelector('#digit7');
const digit8 = document.querySelector('#digit8');
const digit9 = document.querySelector('#digit9');
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

digit0.addEventListener('click', function() {
    buildNumber(0);
});

digit1.addEventListener('click', function() {
    buildNumber(1);
});

digit2.addEventListener('click', function() {
    buildNumber(2);
});

digit3.addEventListener('click', function() {
    buildNumber(3);
});

digit4.addEventListener('click', function() {
    buildNumber(4);
});

digit5.addEventListener('click', function() {
    buildNumber(5);
});

digit6.addEventListener('click', function() {
    buildNumber(6);
});

digit7.addEventListener('click', function() {
    buildNumber(7);
});

digit8.addEventListener('click', function() {
    buildNumber(8);
});

digit9.addEventListener('click', function() {
    buildNumber(9);
});

point.addEventListener('click', function() {
    buildNumber(".");
});


multiply.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "*";
    result.innerText = operator;
    if (lastOperator !== "") {
        firstNumber = operation(lastOperator);
        secondNumber = 0;
    }
    
    lastOperator = operator;
    history.innerText = `${firstNumber} ${operator}`;
});

add.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "+";
    result.innerText = operator;
    if (lastOperator !== "") {
        firstNumber = operation(lastOperator);
        secondNumber = 0;
    }
    
    lastOperator = operator;
    history.innerText = `${firstNumber} ${operator}`;
});

subtract.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "-";
    result.innerText = operator;
    if (lastOperator !== "") {
        firstNumber = operation(lastOperator);
        secondNumber = 0;
    }
    
    lastOperator = operator;
    history.innerText = `${firstNumber} ${operator}`;
});

divide.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "/";
    result.innerText = operator;
    if (lastOperator !== "") {
        firstNumber = operation(lastOperator);
        secondNumber = 0;
    }
    
    lastOperator = operator;
    history.innerText = `${firstNumber} ${operator}`;
});

modulo.addEventListener('click', function() {
    isFirstNumber = false;
    operator = "%";
    result.innerText = operator;
    if (lastOperator !== "") {
        firstNumber = operation(lastOperator);
        secondNumber = 0;
    }
    
    lastOperator = operator;
    history.innerText = `${firstNumber} ${operator}`;
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