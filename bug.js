function add(a, b) {return a + b;} 

function sub(a, b) {return a - b;}

function multi(a, b) {return a * b;}

function div(a, b) {if (b === 0) {throw new Error("Division by zero");} return a / b;}

module.exports = {add, sub, multi, div};