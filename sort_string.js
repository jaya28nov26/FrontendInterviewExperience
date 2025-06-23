const bubbleSortString=(str)=>{
    const chars=str.split('');
    console.log(chars);
    for(let i=0;i<chars.length;i++){
      for(let j=0;j<chars.length-1-i;j++){
        if(chars[j]>chars[j+1]){
          let temp=chars[j];
          chars[j]=chars[j+1];
          chars[j+1]=temp;
        }
      }
    }
    const output=chars.join("");
    return output;
  }
  const unsortedString = "hellomadam";
  const sortedString = bubbleSortString(unsortedString);
  console.log("Sorted string:", sortedString);
  //['h', 'e', 'l', 'l', 'o', 'm', 'a', 'd', 'a', 'm'] //input value
//Sorted string: aadehllmmo //output