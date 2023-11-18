// Первое число, второе число, текущая операция
let firstNumber = "";
let secondNumber = "";
let currentOperation = "";


// Функция для добавления числа
function addNumber(num) {
    if (currentOperation === "") {
        if (firstNumber === "0") {
            firstNumber = num.toString();
        } else {
            firstNumber += num;
        }
        updateOutput();
    } else {
        if (secondNumber === "0") {
            secondNumber = num.toString();
        } else {
            secondNumber += num;
        }
        updateOutput();
    }
}

// Функция для добавления операции
function addOperation(operation) {
    if (firstNumber !== "") {
        currentOperation = operation;
        changeDisplayAndStyle(false);
        updateOutput();
    }
}

// Функция для очистки строки
function clearLine() {
    firstNumber = "";
    secondNumber = "";
    currentOperation = "";
    changeDisplayAndStyle(true);
    updateOutput();
}

// Функция для удаления последнего символа
function backspace() {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
    } else if (currentOperation !== "") {
        currentOperation = "";
        changeDisplayAndStyle(true);
    } else {
        firstNumber = firstNumber.slice(0, -1);
    }
    updateOutput();
}

// Функция для добавления точки
function addPoint() {
    if (currentOperation === "") {
        if (!firstNumber.includes(".")) {
            firstNumber += ".";
        }
    } else {
        if (!secondNumber.includes(".")) {
            secondNumber += ".";
        }
    }
    updateOutput();
}

// Функция для вычисления результата
function calculate() {
    if (firstNumber !== "" && secondNumber !== "" && currentOperation !== "") {
        switch (currentOperation) {
            case "+":
                firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case "-":
                firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case "*":
                firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case "/":
                firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default:
                break;
        }
        secondNumber = "";
        currentOperation = "";
        firstNumber = firstNumber.toString();
        changeDisplayAndStyle(true);
        updateOutput();
    }
}

// Функция для обновления вывода
function updateOutput() {
    document.getElementById("firstNumber").innerHTML = firstNumber;
    document.getElementById("operation").innerHTML = currentOperation;
    document.getElementById("secondNumber").innerHTML = secondNumber;
}

// Вспомогательная функция - меняем стили первого числа и операции при вводе
function changeDisplayAndStyle(style) {
    if (style === true) {
        document.getElementById("operation").style.display = "none";
        document.getElementById("secondNumber").style.display = "none";
        document.getElementById("firstNumber").style.color = "black";
        document.getElementById("operation").style.color = "black";
    } else {
        document.getElementById("operation").style.display = "inline";
        document.getElementById("secondNumber").style.display = "inline";
        document.getElementById("firstNumber").style.color = "gray";
        document.getElementById("operation").style.color = "gray";
    }
}
