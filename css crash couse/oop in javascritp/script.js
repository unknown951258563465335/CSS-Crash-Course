function user(name, Class , age) {
    this.names = name;
    this.classes = Class;
    this.ages = age
}
let newUser = new user('sarosh',11,18)
newUser.type = 'happy'








const proto = {
    slogan : function(){
        return 'this compny is the best'
    },
    changeName : function(newname) {
        this.name = newname
    }
}
let obj = Object.create(proto)
obj.name = 'sa'
obj.changeName('sarosh')
console.log(newUser)


let obj2 = Object.create(proto)
console.log(obj2)