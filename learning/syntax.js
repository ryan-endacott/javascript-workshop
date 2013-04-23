// Basic JavaScript Syntax guide/cheat sheet


// Declaring variables in JavaScript
// Unlike C, type doesn't matter
var i;  
var j = 10;
var k = 'Hello';

// Can even change types
k = 5;

// JavaScript Array
var arr = [1,2,3,4,5];

// Can mix types
var arr = [1, 'hello', 2, 'world'];

// JavaScript object, can be made in many ways
// Lots of quirks about each way

var person = {
  name: 'Ryan',
  age: 18,
  school: 'Mizzou!'
}

// Must use new keyword!  Otherwise `this` points to 
// the global object (window in the browser)
function Person(name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
}
var person = new Person('Ryan', 18, 'Mizzou!');

// First class functions!
var addNums = function(a, b) {
  return a + b;
}


var doNTimes = function(fn, n) {
  return function(*args) {
    for (var i = 0; i < n; i++) {
      fn(*args);
    }
  }
}


// Can also be declared like this:
function doNTimes (fn, n) {
  // Body here
}


