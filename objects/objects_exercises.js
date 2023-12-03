function greeter(greeting) {
  return function(name) {
    return console.log(`${greeting} ${name}`);
  }
}

let hello = greeter('Hello');
let hi = greeter('Hi');



console.log(hello('Trevor'));  // prints "Hello Trevor"
console.log(hello('Ginni'));   // prints "Hello Ginni"
console.log(hi('Spencer'));    // prints "Hi Spencer"
console.log(hi('Grace'));      // prints "Hi Grace"non

console.log(greeter('ww'));