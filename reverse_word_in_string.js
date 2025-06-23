const data = 'I am a developer';
const output=data.split(" ").map((ele)=>ele.split("").reverse().join("")).join(" ");
console.log(output);
//I ma a repoleved