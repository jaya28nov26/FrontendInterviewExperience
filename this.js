Array.prototype.last= function(){
    console.log(this);
    return this[this.length-1];
  }
  console.log([1, 2, 3, 7].last());
  //[ 1, 2, 3, 7 ]
//7