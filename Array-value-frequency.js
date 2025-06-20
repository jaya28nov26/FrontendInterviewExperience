const data = [1,2,3,4,3,2,3,1,1];
const result={};
data.map((data, index)=>{
  if(result[data]){
    result[data]++;
  }
  else{
    result[data]=1;
  }
});
console.log(result); //{ '1': 3, '2': 2, '3': 3, '4': 1 }