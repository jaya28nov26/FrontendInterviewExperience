const str='priya riya supriya';
  
const result = str.split('').filter((data, index)=>{return index===str.indexOf(data)}).join('')

console.log(result); //priya su