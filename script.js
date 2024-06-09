function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2;
}

const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const numbersBtn = document.querySelector('.numbers');
const operatorBtn = document.querySelector('.operator');

let numberFirst = '';
let numberSecond = '';
let operator = '';


const numberDisplay = function (e) {
  if (e.target.id == '1'){
    if (operator == '') {
      display.value += 1;
      numberFirst += '1';
    }else {
      display.value += 1;
      numberSecond += '1';
    }
  }else if (e.target.id == '2'){
    if (operator == '') {
      display.value += 2;
      numberFirst += '2';
    }else {
      display.value += 2;
      numberSecond += '2';
    }
  }else if (e.target.id == '3'){
    if (operator == '') {
      display.value += 3;
      numberFirst += '3';
    }else {
      display.value += 3;
      numberSecond += '3';
    }
  }else if (e.target.id == '4'){
    if (operator == '') {
      display.value += 4;
      numberFirst += '4';
    }else {
      display.value += 4;
      numberSecond += '4';
    }
  }else if (e.target.id == '5'){
    if (operator == '') {
      display.value += 5;
      numberFirst += '5';
    }else {
      display.value += 5;
      numberSecond += '5';
    }
  }else if (e.target.id == '6'){
    if (operator == '') {
      display.value += 6;
      numberFirst += '6';
    }else {
      display.value += 6;
      numberSecond += '6';
    }
  }else if (e.target.id == '7'){
    if (operator == '') {
      display.value += 7;
      numberFirst += '7';
    }else {
      display.value += 7;
      numberSecond += '7';
    }
  }else if (e.target.id == '8'){
    if (operator == '') {
      display.value += 8;
      numberFirst += '8';
    }else {
      display.value += 8;
      numberSecond += '8';
    }
  }else if (e.target.id == '9'){
    if (operator == '') {
      display.value += 9;
      numberFirst += '9';
    }else {
      display.value += 9;
      num2 += '9';
    }
  }else if (e.target.id == '0'){
    if (operator == '') {
      display.value += 0;
      numberFirst += '0';
    }else {
      display.value += 0;
      numberSecond += '0';
    }
  }else if (e.target.id == ""){
    
  }
};

numbersBtn.addEventListener('click', (e) => {
  numberDisplay(e);
});

operatorBtn.addEventListener('click', (e) => {
  if(e.target.id == "add") {
    display.value = '';
    operator = '+';
  }else if(e.target.id == "subtract") {
    display.value = '';
    operator = '-';
  }else if(e.target.id == "multiply") {
    display.value = '';
    operator = '*';
  }else if(e.target.id == "divide") {
    display.value = '';
    operator = '/';
  }
});

clear.addEventListener('click', () => {
  display.value = '';
  numberFirst = '';
  numberSecond = '';
  operator = '';
});

equal.addEventListener('click', () => {
  let intoNumFirst = parseFloat(numberFirst);
  let intoNumSecond = parseFloat(numberSecond);
  
  console.log(intoNumFirst, intoNumSecond);
  if (operator == '+'){
    display.value = add(intoNumFirst, intoNumSecond);
  }else if (operator == '-'){
    display.value = subtract(intoNumFirst, intoNumSecond);
  }else if (operator == '*'){
    display.value = multiply(intoNumFirst, intoNumSecond);
  }else if (operator == '/'){
    display.value = divide(intoNumFirst, intoNumSecond);
  }
});