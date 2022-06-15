const numbers = document.querySelectorAll(".number");
const calculatorSceen = document.querySelector(".calculator-screen");
const operator = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = "";
let currentNumber = "0";
let calculationOperator = "";

const inputNumber = function (number) {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const updateScreen = (number) => {
  calculatorSceen.value = number;
};

const inputOperator = function (operator) {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currenntNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    case "%":
      result = parseFloat(prevNumber) / 100;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});
