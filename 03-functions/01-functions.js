// Function declaration
function greetUser(name) {
  return "Hello, " + name;
}

console.log(greetUser("Poorvika"));

// Function with multiple parameters
function calculateTotal(price, tax) {
  return price + tax;
}

console.log("Total:", calculateTotal(100, 18));

// Function expression
const square = function (number) {
  return number * number;
};

console.log("Square:", square(5));

// Arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log("Multiply:", multiply(4, 3));

// Scope example
let globalVar = "I am global";

function scopeTest() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}

scopeTest();
// console.log(localVar); // This would cause an error
