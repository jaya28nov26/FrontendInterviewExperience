/*
Key Takeaways from These Examples

***************IMP************
1. sync operation (console.log) ->
    Process.nextTick -> 
    micro (e.g. promises ) -> 
    macro(e.g. setTimeout)

***************************************

Synchronous code runs first before any async tasks.

Microtasks (Promise.then) run before macrotasks (setTimeout).

setTimeout(…, 0) executes after the current execution cycle.

Node.js: setImmediate(…) may execute before setTimeout(…, 0).

Nested setTimeout(…) executes in the next event loop cycle.



*/
//Ques 1
console.log("Start"); //1

setTimeout(() => console.log("Timeout"), 0);//4

Promise.resolve().then(() => console.log("Promise")); //3

console.log("End"); //2

//Ques2
setTimeout(() => console.log("Timeout 1"), 100);//5
setTimeout(() => console.log("Timeout 2"), 50);//4

console.log("Log 1"); //1

setTimeout(() => console.log("Timeout 3"), 0);//3

console.log("Log 2");//2

//Ques3
const fs = require("fs");

fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout"), 0);//3
    setImmediate(() => console.log("Immediate")); //2
});

console.log("Start");//1

//Ques4
console.log("A");//1

setTimeout(() => console.log("B"), 0);//4

Promise.resolve().then(() => console.log("C"));//3

console.log("D");//2

//Ques5
setTimeout(() => {
    console.log("First Timeout");//2
    
    setTimeout(() => {
        console.log("Nested Timeout");//3
    }, 0);
}, 0);

console.log("Script End");//1

//Ques6
console.log("Start");//1

setTimeout(() => console.log("Timeout"), 0);//6

Promise.resolve().then(() => console.log("Promise"));//4

(async () => {
    console.log("Async Start");//2
    await Promise.resolve();
    console.log("Async End");//5
})();

console.log("End");//3

//Ques7
console.log("A");//1

process.nextTick(() => console.log("nextTick"));//3

Promise.resolve().then(() => console.log("Promise"));//4

setTimeout(() => console.log("setTimeout"), 0);//5

console.log("B");//2

//Ques8
setImmediate(() => console.log("setImmediate"));//3

setTimeout(() => console.log("setTimeout"), 0);//2

console.log("Synchronous");//1

//Ques9
console.log("Start");//1

setTimeout(() => {
    console.log("Timeout 1");//4
    Promise.resolve().then(() => console.log("Promise in Timeout 1"));//5
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");//3
    setTimeout(() => console.log("Timeout in Promise 1"), 0);//7
});

setTimeout(() => console.log("Timeout 2"), 0);//6

console.log("End");//2