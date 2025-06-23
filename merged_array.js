function mergeArrays(array1, array2) { 

    const mergedArray = []; 
  
  const maxlength=Math.max(array1.length, array2.length);
  console.log(maxlength);
  for(let i=0;i<maxlength;i++){
    if(i<array1.length)mergedArray.push(array1[i]);
    if(i<array2.length)mergedArray.push(array2[i]);
  }
  
    return mergedArray; 
  
  } 
  
  console.log(mergeArrays([1,2,4,6,8], [2,4,10,5,7]));
  
//   5
// [
//    1, 2, 2, 4, 4,
//   10, 6, 5, 8, 7
// ]
