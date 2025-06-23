let arr1 = [3, 1, 9, 7, 5];
let arr2 = [10, 2, 4, 80, 6, -1];
let output=arr1.concat(arr2);
console.log(output);
for(let i=0;i<output.length;i++){
  for (let j=0;j<output.length-1-i;j++){
    if(output[j]>output[j+1]){
      let temp=output[j];
      output[j]=output[j+1];
      output[j+1]=temp;
    }
  }
}
console.log(output);
//[3, 1, 9,  7, 5, 10, 2, 4, 80, 6, -1]//output before sorting
  //[ -1, 1, 2, 3,  4,  5, 6, 7, 9, 10, 80]//output after sorting