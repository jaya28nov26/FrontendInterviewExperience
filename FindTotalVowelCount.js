var str = 'indianaeiouy';
const vowel=['a', 'e', 'i', 'o', 'u'];
let count=0;
for(let vow of str){
  if(vowel.includes(vow)){
    count++;
  }
}
console.log(count); //8