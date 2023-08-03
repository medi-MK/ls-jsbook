// 1. 

let name = 'Victor';

console.log(`Good Morning, ${name}`);
console.log(`Good Afternoon, ${name}`);
console.log(`Good Evening, ${name}`);

// 2.

let currentAge = 33;

let tenYrs = 10;
let twentyYrs = 20;
let thirtyYrs = 30;
let fourtyYrs = 40;

console.log(`In ${tenYrs} years, you will be ${tenYrs + currentAge}`);
console.log(`In ${twentyYrs} years, you will be ${twentyYrs + currentAge}`);
console.log(`In ${thirtyYrs} years, you will be ${thirtyYrs + currentAge}`);
console.log(`In ${fourtyYrs} years, you will be ${fourtyYrs + currentAge}`);

// 3. Produces an error as it is out of scope of the block level (inside {}).

// 4. Produces an error as it is trying to reassign a CONST variable.

// 5. Log 'bar' to the js log as that is the scope where it being accessed.

// 6. It won't produce an error as the const variable is being created in different scopes.

