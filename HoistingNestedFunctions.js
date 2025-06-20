var a = 1;

function first() {
  console.log(a);  // undefined
  var a = 2;
  second();
}

function second() {
  console.log(a);  // 1
}

first();