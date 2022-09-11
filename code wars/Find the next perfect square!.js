function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if(Number.isInteger(Math.sqrt(sq))){
    let value = Math.sqrt(sq)
    value++
    value = Math.pow(value,2)
    return value
    }
    else{
    return -1;
    }
  }