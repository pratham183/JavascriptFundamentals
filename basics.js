
// Fundamentals Part 2
'use strict';
//Functions

sayHello('World');
function sayHello(name) {
    console.log('Hello ' + name);
}
function add(a, b) {
    const total = `the Addition of ${a} and ${b} is ${a + b}`;
    return console.log(total);
}
add(5, 10);



// functions expressions {Key difference}
// Function expressions are not hoisted, so they must be defined before they are called.
// This is a function expression and will not work if called before its definition.
// This will throw an error because sayHello2 is not defined yet.
/*
sayHello2('World2');
const sayHello2 = function (name) {
    console.log('Hello ' + name);
}
    */

const sayHello2 = function (name) {
    console.log('Hello ' + name);
}
sayHello2('World2');

// Arrow functions also same as function expressions, they are not hoisted and must be defined before they are called.
const sayHello3 = (name) => {
    console.log('Hello ' + name);
}
sayHello3('World3');