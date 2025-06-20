const input=[1,2,3,4,5,6,7,8];
const chunkArray=(arr, size)=>{
  const outArr=[];
  while(arr.length>0){
    outArr.push(arr.splice(0, size));
  }
  return outArr;
}
console.log(chunkArray(input, 2)); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

//With slice--non mutated array
const chunkArray1 = (input, size) => {
    const temp = [];
    for (let i = 0; i < input.length; i += size) {
      temp.push(input.slice(i, i + size)); // No mutation
    }
    return temp;
  };
  
  const input1 = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(chunkArray(input, 2));