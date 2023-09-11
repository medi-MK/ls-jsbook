// 1. In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

// array 1 - 4
// array 2 - 5
// array 3 - 0
// array 4 -  3
// array 5 - 101

// 2. Log all of the even values from myArray to the console.

// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// for (let i = 0; i < myArray.length; i += 1) {
//   let value = myArray[i];
//   if (value % 2 === 0) {
//     console.log(value);
//   }
// };

// 3.

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// for (let i = 0; i < myArray2.length; i += 1) {
//   for (let j = 0; j < myArray2[i].length; j += 1) {
//     let value2 = myArray2[i][j];
//     if (value2 % 2 === 0){ 
//       console.log(value2);
//     }
//   }
// };

myArray2.forEach(function(i) {
  i.forEach(function(j) {
    if (j % 2 === 0) {
    console.log(j);
    }
  });
});

  
// 4. Let's try another variation on the even-numbers theme.

// We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];


let listArray = myArray3.map((num) => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  };
});

console.log(listArray);

               

// 5. Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  return array.filter(element => Number.isInteger(element));
  
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 
// 6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let lengths = arr.map(str => str.length);
  return lengths.filter(num => num % 2 !== 0);
  
}
  
  
console.log(oddLengths(arr)); // => [1, 5, 3]

// 7. Use reduce to compute the sum of the squares of all of the numbers in an array:

let array6 = [3, 5, 7];

function sumOfSquares(numbers) {
  let sum = numbers.reduce((acc, num) => (num * num) + acc, 0);
  return sum;
}

console.log(sumOfSquares(array6)); // => 83

// 8. Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arr7 = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths2(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}


console.log(oddLengths2(arr7)); // => [1, 5, 3]

// 9. Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

numbers1.includes(3);


numbers2.includes(3);


numbers3.includes(3);


// 10. Write some code to replace the value 6 in the following array with 606:

let arr8 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
  
arr8[1][3] = 606;
console.log(arr8);