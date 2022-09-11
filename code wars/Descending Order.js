function descendingOrder(n){
    //...
    if(n.toString().length>1){
    let array = n.toString().split('')
    array = array.sort().reverse().join('')
      return parseInt(array);
  }
    else{
      return n
    }
  }