const arr = [1,2,3,4,3,2,4,7,8,4];
let temp;
for (let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]<arr[j]){
      temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
}
console.log(arr);//[ 8, 7, 4, 4, 4, 3, 3, 2, 2, 1]
console.log( arr[1]); //  7
