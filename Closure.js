function outerFunction(){
    let outerVar='Hi, I am from outer level';
    function innerFunction(){
      console.log(outerVar);
    }
    return innerFunction;
  }
  const outerVarOutput=outerFunction();
  outerVarOutput();