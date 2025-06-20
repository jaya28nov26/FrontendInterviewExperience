const array = [1, 2, [3, 4, [5, 6], [7, 8], 9], [10, 11]];
const flatArr=(array, temp=[])=>{
  array.forEach((item)=>{
    if(Array.isArray(item)){
      flatArr(item, temp);
    }else{
      temp.push(item);
    }
  });
  return temp;
}
console.log(flatArr(array)); //[1,2,3,4,6,7,8,9,10,11]
 