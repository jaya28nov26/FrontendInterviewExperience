console.log(a);  // reference error
let a = 1;

function checkTDZ() {
  console.log(b);  // reference error
  const b = 2;
  console.log(b);  // 2
}
checkTDZ();

if (true) {
  console.log(c);  // reference error
  let c = 3;
}