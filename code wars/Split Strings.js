function solution(str){
    let array = str.split('')
    let res = []
    for(let i = 0; i<array.length;i+=2){
      if(array[i+1]) res.push(array[i]+array[i+1])
      else res.push(array[i]+'_')
    }
    return res
  }