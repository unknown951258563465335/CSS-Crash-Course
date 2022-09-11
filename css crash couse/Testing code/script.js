// console.log('helo')

// let btn = document.getElementById('button');
// btn.addEventListener('click', fetchDAta)


// function fetchDAta() {

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)


//     xhr.onload = function () {
//         if (this.status = 200) {
//             obj = JSON.parse(this.responseText)
//             let list = document.getElementById('list')
//             let str =""
//             for (const key in obj) {
//                 str += `<li>${obj[key].name}</li>`

//             }
//             list.innerHTML = str
//             // console.log(obj)

//         }
//     }
//     xhr.send()

// }    

var people = [
    { gender: "Male", name: "Jeff" },
    { gender: "Male", name: "Jeff" },
    { gender: "Female", name: "Megan" },
    { gender: "Female", name: "Madison" }
];

// console.log(people.length)

for (let index = 0; index < people.length; index++) {
    var array = []
    // var obj = []
    var people = [
        { gender: "Male", name: "Jeff" },
        { gender: "Male", name: "Jeff" },
        { gender: "Female", name: "Megan" },
        { gender: "Female", name: "Madison" }
    ];


    var obj2 = []
    array.push(people[index].gender)
    var ob = []
    if(index == 0){
        ob = people
    }
    else{
        ob = obj2
    }



    // for (let index = 0; index < people.length; index++) {
    //     if (ob[index].gender.includes(array[index])) {
    //         array.push(people[index].gender)
    //         obj.push(people[index])

    //     }
    //     else{
    //         obj2.push(people.index)
    //     }
    // }
    // console.log(array)
    console.log(ob)
}

