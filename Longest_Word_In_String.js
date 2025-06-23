const str='Hi I am jaya Shukla, a frontend developer';
let max=-Infinity;
let result;
var words=str.split(" ");
for(let word of words){
  if(word.length>max){
    max=word.length;
    result=word;
  }
}
console.log(result);//developer

//2nd approach-using sort
var str2 = 'I am an indian';
const output = str2.split(' ').sort((a, b) => b.length - a.length);
console.log(output[0]);  // Output: "indian"

//3rd approach - using reduce method
var str3 = 'I am an indian';

const longest = str3
  .split(' ')
  .reduce((max, word) => word.length > max.length ? word : max, '');

console.log(longest);  // Output: "indian"