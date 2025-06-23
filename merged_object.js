const mergeObjects=(obj1,obj2)=>{
    let result={};
    for(let key in obj1){
      if(key in obj2){
        result[key]=[obj1[key], obj2[key]];
      }
    }
    return result
  }
  
  console.log(mergeObjects({ a: 1, b: 2, d: 6 }, { a: 3, b: 4, c: 5, e: 4 }));
  //{ a: [ 1, 3 ], b: [ 2, 4 ] }

  //Type 2 complete merged object
  const mergeObjects1 = (obj1, obj2) => {
    const temp = {}
    for(let key in obj1) {
            temp[key] = obj2[key] ? [obj1[key], obj2[key] ] : [obj1[key]]
    }
    for(let key in obj2) {
        if(!obj1[key]) {
           temp[key] = [obj2[key]] 
        }
        
    }
    
    return temp
}


console.log(mergeObjects1({ a: 1, b: 2, d:6 }, { a: 3, b: 4, c:5 , e:4}));  
// Output: { a: [ 1, 3 ], b: [ 2, 4 ], d: [ 6 ], c: [ 5 ], e: [ 4 ] }