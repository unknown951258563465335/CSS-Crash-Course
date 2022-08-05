console.log('help')

let container = document.getElementById('container')
let heading = document.getElementById('heading')
let container_l = container.addEventListener('mousemove' , fun1)
container.style.height = '100vh'
heading.style.height= '100%'
heading.style.display= 'flex'
heading.style.justifyContent= 'center'
heading.style.alignItems= 'center'


function fun1(e) {
    container.style.backgroundColor = `rgba(${e.offsetX} , ${e.offsetY-e.offsetX} ,${e.offsetY+50})`;
    heading.style.color = `rgba(${e.offsetY} , ${e.offsetY} , ${e.offsetX})`
}