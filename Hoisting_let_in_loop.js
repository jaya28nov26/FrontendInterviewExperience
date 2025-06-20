//let in loop
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }// 1 2 3 after 1 sec

  //var in loop
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
  //333 after 1 sec