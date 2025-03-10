function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(a, b, operator) {
  return operator(a, b);
}
calculator(3, 4, multiply);
// This is an example of a higher order function

// Constructor function for creating a BellBoy object
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

// Counter to keep track of bellboy numbers
// let bellboyCount = 0;
// // 
// // Object to store multiple bellboys
// let bellboys = {};

// // Function to collect user input and create a numbered BellBoy object
// function getInputs() {
//   let name = prompt("Please enter your name: ");
//   let age = prompt("Please enter your age: ");
//   let hasWorkPermit = true;
//   let languages = prompt(
//     "Enter the languages you speak (separated by spaces)"
//   ).split(" ");

//   // Increment the counter for each new bellboy
//   bellboyCount++;

//   // Generate a unique key like "bellboy1", "bellboy2", etc.
//   let bellboyKey = `bellboy${bellboyCount}`;

//   // Create a new BellBoy object and store it with the generated key
//   bellboys[bellboyKey] = new BellBoy(name, age, hasWorkPermit, languages);

//   return bellboys[bellboyKey];
// }

// // Create a new bellboy
// let newBellBoy = getInputs();
// console.log(newBellBoy); // Log the newly created bellboy


function addBellBoy(processor) {
  let name = prompt("Enter your name:");
  let bellboy = { name };

  processor(bellboy, name); // Ask processor to handle it
}

let bellboys = {};

// Different ways to store bellboys
function storeByName(bellboy, key) {
  bellboys[key] = bellboy;  // Store using the bellboy's name
}

function storeByNumber(bellboy) {
  let count = Object.keys(bellboys).length + 1;
  bellboys[`bellboy${count}`] = bellboy;  // Store as bellboy1, bellboy2, etc.
}

// Call the function with different processors
addBellBoy(storeByName);
console.log(bellboys); 

addBellBoy(storeByNumber);
console.log(bellboys); 
