function add(a, b) {return a + b;} 

function sub(a, b) {return a - b;}

function multi(a, b) {return a * b;}

function div(a, b) {
if (b === 0) {
  // Handle division by zero gracefully
  return 0; // Or throw a custom error with more context 
  //throw new Error("Division by zero");
} 
return a / b;}

module.exports = {add, sub, multi, div};