// 1. This code logs 1 to the console. The function foo doesn't change this as the variable bar inside the function is scoped

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// 2.

let getName = (text) => {
  let input = prompt(text);
  return input;
};
  


let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name?' );
console.log(`Hello, ${firstName} ${lastName}!`);

// 3. 

let multiply = (a, b) => a * b;

let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let num1 = getNumber('Please input the first number: ');
let num2 = getNumber('Please input the second number: ');
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

// 4. It doesn't output to the console as the function returns before reaching the console log statement in line 4


// 5. Nothing as there's no console log statement.

/* 6.

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

-- function arguments are: 2, 3, 4
-- function body: what's between the {}
-- function declaration: 

    function multiplyNumbers(num1, num2, num3) {
      let result = num1 * num2 * num3;
      return result;
    }

-- function invocation:  multiplyNumbers(2, 3, 4)
-- function name: multiplyNumbers
-- function parameters: num1, num2, num3
-- function return value: result ???? WRONG 
-- the names of the variables: product, result, product, num1, num2, num3, multiplyNumbers
*/

// 8. Hello and Undefined

// 9. 42 and 3.1415

// 10. multiply, left, right, product, getNumber, prompt, question, left, right, console

/* 11.

multiply: global
left/right(parameter): local
product: local
getNumber: global
prompt: local
parseFloat: global
question: global
left: global
right: global
console: global
*/

// 12. These are different variables. The left and right inside the function are parameters and are local scoped to inside the function. The other left and variables are global scoped




