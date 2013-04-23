// Basic JavaScript Syntax guide/cheat sheet
// Also has jQuery basics

// JavaScript must be embedded in script tags
/*
<script>
  // Your JS here
</script>
*/

// Or included from an external '*.js' file
/*
<script src="jquery.js"></script>
*/

// JavaScript hello world!
alert('hello world')

// Declaring variables in JavaScript
// Unlike C, type doesn't matter
var i;  
var j = 10;
var k = 'Hello';

// Can even change types
k = 5;

// JavaScript Array
var nums = [1,2,3,4,5];

// Can mix types
var arr2 = [1, 'hello', 2, 'world'];

// For loop:
for (var i = 0; i < 10; i++) {
  console.log('i is ' + i);
}

// While loop:
var i = 0;
while (i < 10) {
  console.log('i is ' + i);
}

// JavaScript object, can be made in many ways
// Lots of quirks about each way

// Can make with JSON (JavaScript Object Notation)
var person = {
  name: 'Ryan',
  age: 18
};

// Can add properties at any time
person.school = 'Mizzou!';

// Can make with a function
// Must use new keyword!  Otherwise `this` points to 
// the global object (window in the browser)
function Person(name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
}

// Creating an instance of person
var person = new Person('Ryan', 18, 'Mizzou!');

// First class functions!
// They can be passed around as values
var addNums = function(a, b) {
  return a + b;
};

// Can also be declared like this
// It gives better debug output for errors
function subtractNums(a, b) {
  return a - b;
}


// Javascript hello world!
var sayHi = function() {
  alert('hello world');
};


// This function takes a function as a parameter
// and call it n times
var doNTimes = function(fn, n) {
  for (var i = 0; i < n; i++) {
    fn(); // Calling the parameter function!
  }
}

// Say hi five times!
doNTimes(sayHi, 5);

// Very cool calculus example
// This function returns the derivative of a function that
// It is passed
var derive = function(f) {
  // In calculus, a derivative is defined as 
  // the limit as dx -> 0 of
  // (f(x+dx)-f(x)/dx

  // So we can closely approximate that if
  // we use an arbitrarily small dx
  var dx = .001; 

  // Now we can actual return the derivative 
  // of the function we were given!  So cool!!!
  // Returning a function!
  return function(x) {
    return (f(x+dx) - f(x))/dx;
  }
}

// So now if we have a function called square
// x^2
var square = function(x) {
  return x * x;
}

// We can get its approximate derivative using the function above!
// Its derivative is 2x
var derivSquare = derive(square);

square(10); // 100
derivSquare(10); // About 20
// Magical!!!!
// And it should work for any function you give it!





