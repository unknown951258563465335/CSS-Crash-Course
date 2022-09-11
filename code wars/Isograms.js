function isIsogram(str){
    //...
    if(str.length == 0){
      return true
    }else str = str.toLowerCase(); var array = str.split('').sort();
    for(let i = 0; array.length > i ; i++){
      if(array[i+1] == array[i]) return false
    }
    return true
  }