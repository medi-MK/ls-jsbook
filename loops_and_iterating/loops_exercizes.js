// 1. Modiied age.js file

let currentAge = 12.7;


for (let i = 10; i <=40; i += 10) {
  console.log(`In ${i} years, you will be ${i + currentAge}`);
}

// 2. Function Factorial

let factorial = (num) => {
  let n = 1;
  for (let i = num; i > 0; i -= 1) {
    console.log(i);
    n *= i ;
    
    
  }
  
  console.log(n);
};
  
factorial(5);

let a = 'foo';

if (1 === 1) {
  a = 'bar';
}

console.log(a);


// 3. Why does this code loop indefinitely?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The condition for the while expression is an assignment rather than a equality comparison

// 4.Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// No error, the increment is in the body of the for loop

// 5. The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2.

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// Got this wrong -- didn't read the problem correctly. Here is the answer -- a do/while loop:

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');


// 6. Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.




let factorial = function(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * (factorial(num - 1));
  }
  
  
  
  
}

console.log(factorial(5));
