function fetching() {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>response.json()).then((data)=>console.table(data))
    
}
let btn = document.getElementById('btn')
btn.addEventListener('click' , fetching)

