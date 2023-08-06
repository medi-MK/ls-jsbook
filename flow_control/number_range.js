let numberRange = function (num) {
  if (!Number.isInteger(num)) {
    console.log(`${num} is not an integer`);
    return;
  }
    
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num >= 0 && num <= 50) { 
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is over 100`);
  }
};
  

    
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
numberRange("foo");
numberRange(23.55);