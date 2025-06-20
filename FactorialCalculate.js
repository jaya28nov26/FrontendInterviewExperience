//increasing recursion
const fact=(num)=>{
    if(num===0 || num===1){
      return 1;
    }
    return num * fact(num-1);
  }
  console.log(fact(5)); //120

  //Decreasing recursion
  function factorial(n, acc = 1) {
    console.log(n)
  if (n === 1) return acc;
  return factorial(n - 1, n * acc); // Tail-recursive call
}
console.log(factorial(5)); // 120