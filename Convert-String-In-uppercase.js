const input = 'i am a developer';
const result=input.split(" ").map((data)=>{return data.slice(0,1).toUpperCase()+data.slice(1)}).join(" ");
console.log(result);

//2nd approach
const input1 = "convert first char into uppercase for every word of sentence";


const result1 = (input1) => {
    return input1.split(' ').map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ');
}

console.log(result1(input1))//Convert First Char Into Uppercase For Every Word Of Sentence