const diffArray=(arr1, arr2)=>{
    return [
      ...arr1.filter(num=> !arr2.includes(num)),
      ...arr2.filter(num=> !arr1.includes(num))
      ]
  }
  console.log(diffArray([1,2,3,4,7,0], [2,3,4,5,8,-1,-3]));