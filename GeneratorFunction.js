function* count(){
    yield 1;
    yield 2;
    yield 3;
    
  }
  const iterator=count();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().done);
//1
//2
//3
//true