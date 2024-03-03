
let name = "John!"; // define the name & greeting
let greeting = "Good morning";

console.log(getGreeting(name, greeting)); // call the getGreeting func

function getGreeting(name, greeting) {
    return greeting + ', ' + name; // return the message
}