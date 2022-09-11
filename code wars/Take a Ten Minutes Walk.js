function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }


  function isValidWalk(walk) {
    var dx = 0;
    var dy = 0;
    var dt = walk.length;
    for (let index = 0; index < walk.length; index++) {
      switch (walk[index]) {
        case "n":
          dx++;
          break;
        case "s":
          dx--;
          break;
        case "e":
          dy++;
          break;
        case "w":
          dy--;
          break;
      }
    }
    if(dx === 0 && dy === 0 && dt === 10){
  
      return true;
    }
    else{
      return false
    }
  }