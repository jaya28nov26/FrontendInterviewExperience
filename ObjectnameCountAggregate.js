const input=[
    {name:'jaya', count: 10},{name:'jasmin', count: 20},{name:'jack', count: 55},{name:'jasmin', count: 2},{name:'jaya', count: 100}];
    const output={};
    for(const val of input){
      const key=val.name.toLowerCase();
      if(output[key]){
        output[key].count=output[key].count+val.count;
      }
      else{
        output[key]={...val};
      }
      
    }
    const result=Object.values(output);
      console.log(output);
    console.log(result);

//     Output:

//output var
// {
//   jaya: { name: 'jaya', count: 110 },
//   jasmin: { name: 'jasmin', count: 22 },
//   jack: { name: 'jack', count: 55 }
// }

//result var
// [
//   { name: 'jaya', count: 110 },
//   { name: 'jasmin', count: 22 },
//   { name: 'jack', count: 55 }
// ]