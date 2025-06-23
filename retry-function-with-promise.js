function retryWithPromise(fetchdataFunction, retry, delay){
    return new Promise((resolve, reject)=>{
      const trycall=attempt=>{
        fetchdataFunction().then(resolve).catch(error=>{
          if(attempt<retry){
            setTimeout(()=>trycall(attempt+1), delay);
          }
          else{
            reject(error);
          }
        })
      }
      trycall(0);
    })
  }
  function fetchdata(){
    const randomNumber=Math.random();
    return new Promise((resolve, reject)=>{
      if(randomNumber>0.8){
        resolve("Data fetched successfully!!");
      }
      else{
        reject("Failed to load data!!");
      }
    })
  }
  retryWithPromise(fetchdata, 3, 1000).then(data=>console.log(data)).catch(error=>console.log(error));
  //Data fetched successfully!!
  //Failed to load data!!