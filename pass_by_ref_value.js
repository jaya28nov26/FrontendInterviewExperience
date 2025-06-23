//pass by value
let a = 10;
let b = a; // Copy
console.log(a); // 10 (unchanged)
console.log(b); // 10 (unchanged)

b = 20;
console.log('after', b); // 20 (unchanged)

console.log('after', a); // 10 (unchanged)

//pass by reference
let obj1 = { name: "Alice" };
let obj2 = obj1;
console.log('Before', obj2.name); // Alice (changed)

obj1.name = "Bob";
console.log('after',obj1.name); // Bob (changed)

console.log('after',obj2.name); // Bob (changed)