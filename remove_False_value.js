const removeFalseValue=(arr)=>{
    let outputArray=[];
    for(let val of arr){
      if(val){
        outputArray.push(val);
      }
    }
    return outputArray;
  }
  console.log(removeFalseValue(["priya", 0 ,"", false, null,undefined, "ate", NaN ,9 ]));
  //[ 'priya', 'ate', 9 ]

  //Approach 2

  const removeFalseValueVar=(arr)=>arr.filter(Boolean);
  console.log(removeFalseValueVar(["priya", 0 ,"", false, null,undefined, "ate", NaN ,9,'jaya' ]));
  //[ 'priya', 'ate', 9, 'jaya' ]