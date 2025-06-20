const fibonacciLoop = (num) => {
    if (num === 0) return [];
    if (num === 1) return [0];
    
    const output = [0, 1];
  
    for (let i = 2; i < num; i++) {
      output.push(output[i - 1] + output[i - 2]);
    }
  
    return output;
  };
  
  console.log(fibonacciLoop(6));  // [0, 1, 1, 2, 3, 5]

  //using recursion
  const fibonacci = (num, output=[0,1]) => {
    if(output.length >= num) return output;
   // console.log(output, output[output.length-2] , output[output.length-1])
    output.push(output[output.length-2] + output[output.length-1] );
    
    return fibonacci(num, output)
} 

console.log(fibonacci(6))//[ 0, 1, 1, 2, 3, 5 ]

//sum of fibonacciSequence

const recursion = (num) => {
    if(num === 1){
        return 1;
    }
    if(num <= 0) { return 0};
    return recursion(num-2) + recursion(num-1)
    
}

console.log(recursion(1))//1