let factorial = (num) => {
  let n = 1;
  for (let i = num; i > 0; i -= 1) {
    console.log(i);
    n *= i ;
    
    
  }
  
  console.log(n);
};
  
factorial(5);

