const findKey=(obj, toFindKey)=>{
    for(let key in obj){
      if(key===toFindKey){
        return obj[key];
      }
      if(typeof(obj[key] ==='object' && obj[key] !== null)){
        const result=findKey(obj[key], toFindKey);
        if(result !== undefined){
          return result;
        }
      }
    }
  }
  const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
  console.log(findKey(obj, "c"));  // Output: 2