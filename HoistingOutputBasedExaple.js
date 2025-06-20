//Output bAsed Example
var a = 10;
function outer() {
  console.log(a);  // undefined
  var a = 20;

  function inner() {
    console.log(a);  // 20
    a = 30;
    console.log(a);  // 30
  }
  
  inner();
  console.log(a);  // 30
}
outer();
console.log(a);  // 10

// function calling in hoisting
sayHello(); //Hello!

function sayHello() {
  console.log("Hello!");
}

sayHello = function() {
  console.log("Hi!"); //Hi!
};

sayHello();
// Question type2

foo();  // error: Not a function on var declaration is hoisted
var foo = function() {
  console.log("foo");
};

bar();  //bar as an output as complete declaration along with body is hoisted
function bar() {
  console.log("bar");
}
