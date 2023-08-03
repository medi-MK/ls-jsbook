// 1.

const firstName = 'Medi';
const lastName = 'Khan';

const fullName = firstName + ' ' + lastName;

// alt way

const fullName2 = `${firstName} ${lastName}`;

// 2.

const number = 4936;

const ones = number % 10;

const tens = ((number - ones) / 10) % 10;

const hundreds = ((number - ones - (tens * 10)) / 100) % 10;

const thousands = ((((number - ones) - (tens * 10)) / 100) - hundreds) / 10;



console.log(number);
console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);

// 3.

/* 

'true' = string
false = boolean
1.5 = number
2 = number
undefined = undefined
{ foo: 'bar' } =  object
*/



// 4. The following code logs 510 because the number 10 is type coerced to a string and concatenated with the string '5'.

console.log('5' + 10);

// 5.

let result = Number('5') + 10;

// 6.

console.log(`The value of 5 + 10 is ${result}`);

// 7.

let foo = ['a', 'b', 'c'];
console.log(foo[3]);

//  No error, returns undefined. Flashcard created.

// 8. 

let lotrArr = ['Gandalf', 'Elrond', 'Leoglas', 'Sauron'];

// 1.

let lotrObj = {
  
  'Gandalf': 'Wizard',
  'Elrond': 'High Elf',
  'Leoglas': 'Wood Elf',
  'Sauron': 'Bad Guy',
  
};

// 10. false

// 11. Returns 3

parseInt('3.1415')

let name;

console.log(name);



















