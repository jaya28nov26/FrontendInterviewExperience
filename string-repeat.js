const input = 'jaya';
const output=input.repeat(3);
console.log(output);//jayajayajaya

//2nd approach custom recursion function

const repeatString=(str, sum=str, count=3)=>{
    if(count<=1){
      return sum;
    }
    return repeatString(str, str+sum, count-1);
  }
  console.log(repeatString('jay')); //jayjayjay