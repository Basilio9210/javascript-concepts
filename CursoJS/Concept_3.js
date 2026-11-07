
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: cherry

//Add elements to the array
fruits.push("date");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

//Remove the last element from the array
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "cherry"]

//Add an element to the beginning of the array
fruits.unshift("apricot");
console.log(fruits); // Output: ["apricot", "apple", "banana", "cherry"]

//Remove the first element from the array
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "cherry"]

//Find the index of an element in the array
const index = fruits.indexOf("banana");
console.log(index); // Output: 1

//Check if an element is in the array
const hasCherry = fruits.includes("cherry");
console.log(hasCherry); // Output: true

//Remove an element from the array by index
const removedElement = fruits.splice(index, 1);
console.log(removedElement); // Output: ["banana"]  
console.log(fruits); // Output: ["apple", "cherry"]


const arr = [1, 2, 3];

arr.push(4);      // arr = [1, 2, 3, 4]   → devuelve 4
arr.pop();        // arr = [1, 2, 3]      → devuelve 4
arr.unshift(0);   // arr = [0, 1, 2, 3]   → devuelve 4
arr.shift();      // arr = [1, 2, 3]      → devuelve 0

arr.slice(1, 3);  // [2, 3]  (el índice final no se incluye)
arr.slice(-2);    // [2, 3]  (los últimos dos)
console.log(arr); // [1, 2, 3]  (slice no cambió nada)

const a = [10, 20, 30, 40];
const b = a.slice(1, 3);
b.push(99);
console.log(a, b);

