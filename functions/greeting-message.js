// global scope

// let greetingMessage = 'Good Morning!';


// function greetPeople() {
//   console.log(greetingMessage);
// }


// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage;
// }

// changeGreetingMessage('Good Evening!');

// greetPeople();

// local scope

function greetPeople() {
  let greetingMessage = 'Good Morning!';
  console.log(greetingMessage);
}
 
 
greetPeople()

greetPeople();
console.log(greetingMessage); // raises ReferenceError

