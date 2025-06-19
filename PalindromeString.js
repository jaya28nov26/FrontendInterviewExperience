function isPalindrome(str){
    if(str.split("").reverse().join("")===str){
      return true;
    }else{
      return false;
    }
  }
  let string='abdyidba';
  console.log(isPalindrome(string));

  //or
//   function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
//   }