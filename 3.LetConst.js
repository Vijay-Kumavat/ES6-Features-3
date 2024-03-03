const name = "Alice"; // assign the name in const 
let age = 30;

console.log('Name: ' + name + ', Age: ' + age); // initial value
console.log(updateAge());

function updateAge(){
    age = 31;
    return 'Name: ' + name + ', Age: ' + age; // after update the age
}