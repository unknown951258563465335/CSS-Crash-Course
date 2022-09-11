function func() {
    return new Promise(function(resolve,reject) {
        let error = false
        if(!error){
            resolve()
        }
        else{
            reject()
        }
    })
}

func().then(function() {
    console.log('yoo')
}).catch(function() {
    
    console.log('No')
})