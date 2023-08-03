let multiply = (a, b) => a * b;

let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let num1 = getNumber('Please input the first number: ');
let num2 = getNumber('Please input the second number: ');
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);



