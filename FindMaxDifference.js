const data = (arr) => {
   
    let max=0;
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(Math.abs(arr[i]-arr[j])>max){
          max=Math.abs(arr[i]-arr[j]);
        }
      }
    }
    return max;
 }
 
 
 console.log(data([1,2,3,4,5])) //4

 //Using inbuild function
 const data1 = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return Math.abs(max - min);
  };
  
  console.log(data1([1, 2, 3, 4, 5])); // Output: 4