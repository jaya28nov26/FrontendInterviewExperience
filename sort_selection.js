const selectionSort=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
      let minIndex=i;
      for(let j=i+1;j<arr.length;j++){
        if(arr[minIndex]>arr[j]){
          minIndex=j;
        }
      }
      if(minIndex!==i){
        [arr[i],arr[minIndex]]=[arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  const arr = [1, 3, 4, 5, 2, 4, 6];
  const sortedArray=selectionSort(arr);
  console.log(sortedArray);
  //[1, 2, 3, 4, 4, 5, 6]