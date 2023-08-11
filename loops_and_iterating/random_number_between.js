// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries;
// let result = randomNumberBetween(1, 6);
// for (tries = 0; result <= 2; tries +=1) {
//   return tries;
// }
// // let tries = 0;
// // let result = randomNumberBetween(1, 6);
// // tries += 1;

// // while (result <= 2) {
// //   result = randomNumberBetween(1, 6);
// //   tries += 1;
// // }

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  console.log(result);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');