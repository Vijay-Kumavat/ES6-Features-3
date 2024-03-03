const numbers = [1, 2, 3, 4];

// Using the map method to double each number
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8]

const nums = [1, 2, 3, 4, 5];

// Using the filter method to filter out even numbers
const oddNumbers = nums.filter(num => num % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5]
