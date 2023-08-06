let add = (num1, num2) => num1 + num2;

let getNumber = (text) => { 
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter a second number: ');
console.log(add(number1, number2));


