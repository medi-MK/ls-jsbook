let isEven = function (num) {
  num % 2 === 0 ? console.log('even') : console.log('odd'); // this is not reccommended
}
  
  
let isEven2 = function (num) {
  switch (num % 2) {
    case 0:
      console.log('even');
      break;
    
    default:
      console.log('odd');
  }
}
  
let isEven3 = function (num) {
  if (typeof num === 'number') {
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('that is not a number');
  }
}

isEven(24);
isEven2(13);
isEven3('foo');

