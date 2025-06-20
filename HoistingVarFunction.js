console.log(x);  // undefined
var x = 5;

function hoist() {
  console.log(y);  // undefined
  var y = 10;
  console.log(y);  // 10
}
hoist();

console.log(z);  // undefined
var z = function() {
  console.log("This is a function expression"); //This is a function expression
};
z();