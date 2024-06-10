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
  if (num2 === 0) {
    return "Error";
  }
  return num1 / num2;
}

const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const btn = document.querySelector('.btn');
const backspacee = document.getElementById('backspace');

let numberFirst = '';
let numberSecond = '';
let operator = '';

btn.addEventListener('click', (e) => {
  if (e.target.matches('.num')) {
    numberDisplay(e);
  }else if (e.target.matches('.ope')) {
    if (numberFirst !== '' && numberSecond !== '') {
      numberFirst = operate().toString();
      display.value = numberFirst;
      operator = '';
      numberSecond = '';
    }
    operatorPress(e);
  }
  // alert(e.target.id);
});

const numberDisplay = function (e) {
  const value = e.target.id;
  
  if (!isNaN(value)) {
    display.value += value;
    if (operator === '') {
      numberFirst += value;
    }else {
      numberSecond += value;
    }
  }
};

const operatorPress = function (e) {
  const operatorId = e.target.id;
  
  if(operatorId == 'add') {
    display.value = ''; operator = '+';
  }else if (operatorId == 'subtract') {
    display.value = ''; operator = '-';
  }else if (operatorId == 'multiply') {
    display.value = ''; operator = '*';
  }else if (operatorId == 'divide') {
    display.value = ''; operator = '/';
  }
  
};

const operate = function () {
  let intoNumFirst = parseFloat(numberFirst);
  let intoNumSecond = parseFloat(numberSecond);
  
  if (operator === '+') {
    return add(intoNumFirst, intoNumSecond);
  } else if (operator === '-') {
    return subtract(intoNumFirst, intoNumSecond);
  } else if (operator === '*') {
    return multiply(intoNumFirst, intoNumSecond);
  } else if (operator === '/') {
    return divide(intoNumFirst, intoNumSecond);
  }
};

backspacee.addEventListener('click', () => {
  if(operator === '') {
    numberFirst = numberFirst.slice(0, -1);
    display.value = numberFirst;
  }else {
    numberSecond = numberSecond.slice(0, -1);
    display.value = numberSecond;
  }
}); 

clear.addEventListener('click', () => {
  display.value = '';
  numberFirst = '';
  numberSecond = '';
  operator = '';
});

equal.addEventListener('click', () => {
  if(numberFirst !== '' && numberSecond !== '') {
    let roundRes = Math.round(operate() * 100) / 100;
    
    display.value = roundRes;
    numberFirst = display.value;
    numberSecond = '';
    operator = '';
  }
});

// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   if (num2 === 0) {
//     return 'Error: Division by zero';
//   }
//   return num1 / num2;
// }

// const display = document.querySelector('#display');
// const clear = document.querySelector('#clear');
// const equal = document.querySelector('#equal');
// const numbersBtn = document.querySelector('.numbers');
// const operatorBtn = document.querySelector('.operator');

// let numberFirst = '';
// let numberSecond = '';
// let operator = '';

// const numberDisplay = function(e) {
//   const value = e.target.id;
//   if (!isNaN(value)) {
//     display.value += value;
//     if (operator === '') {
//       numberFirst += value;
//     } else {
//       numberSecond += value;
//     }
//   }
// };

// const calculate = () => {
//   let intoNumFirst = parseFloat(numberFirst);
//   let intoNumSecond = parseFloat(numberSecond);

//   if (operator === '+') {
//     return add(intoNumFirst, intoNumSecond);
//   } else if (operator === '-') {
//     return subtract(intoNumFirst, intoNumSecond);
//   } else if (operator === '*') {
//     return multiply(intoNumFirst, intoNumSecond);
//   } else if (operator === '/') {
//     return divide(intoNumFirst, intoNumSecond);
//   }
// };

// numbersBtn.addEventListener('click', (e) => {
//   if (e.target.matches('button')) {
//     numberDisplay(e);
//   }
// });

// operatorBtn.addEventListener('click', (e) => {
//   if (e.target.matches('button')) {
//     const value = e.target.id;
//     if (numberFirst && numberSecond) {
//       numberFirst = calculate().toString();
//       display.value = numberFirst;
//       numberSecond = '';
//     }
//     operator = value === 'add' ? '+' :
//               value === 'subtract' ? '-' :
//               value === 'multiply' ? '*' :
//               value === 'divide' ? '/' : '';
//     display.value = '';
//   }
// });

// clear.addEventListener('click', () => {
//   display.value = '';
//   numberFirst = '';
//   numberSecond = '';
//   operator = '';
// });

// equal.addEventListener('click', () => {
//   if (numberFirst && numberSecond) {
//     display.value = calculate();
//     numberFirst = display.value;
//     numberSecond = '';
//     operator = '';
//   }
// });