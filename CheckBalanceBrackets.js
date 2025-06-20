const checkBracketBalance=(input)=>{
    const brackets={
      '(':')', '[':']','{':'}'
    }
    const temp=[];
    for(let char of input){
      if(brackets[char]){
        temp.push(char);
      }else if(Object.values(brackets).includes(char)){
        const last=temp.pop();
        if(brackets[last]!==char){
          return false;
        }
        
      }
    }
    return temp.length ===0;
  }
  console.log(checkBracketBalance('({})[{}]')); //true