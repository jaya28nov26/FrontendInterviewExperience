//Using Promise
console.log('fetch start');
fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(posts=>console.log(posts)).catch(error=>console.log(error));
console.log('fetch end');

//Using async-awiat
const fetchPost=async()=>{
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts=await response.json();
        console.log(posts);
    }
    catch(error){
        console.log(error);
    }
   
}
console.log('async await start');
fetchPost();
console.log('async await end');