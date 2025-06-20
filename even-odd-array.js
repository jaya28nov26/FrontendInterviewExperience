const arr = [1,2,3,4,5,6,7,8,9, 21, 55, -2, 100];
const even=[];
const odd=[];
for(let i=0;i<arr.length;i++){
  Math.abs(arr[i]%2===0 ? even.push(arr[i]) : odd.push(arr[i]));
}
console.log(even, odd); // [ 2, 4, 6, 8, -2, 100 ] 
   // [1,  3,  5, 7, 9, 21, 55 ]