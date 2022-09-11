console.log('help')

// let container = document.getElementById('container')
// let heading = document.getElementById('heading')
// let container_l = container.addEventListener('mousemove' , fun1)
// container.style.height = '100vh'
// heading.style.height= '100%'
// heading.style.display= 'flex'
// heading.style.justifyContent= 'center'
// heading.style.alignItems= 'center'


// function fun1(e) {
//     container.style.backgroundColor = `rgba(${e.offsetX} , ${e.offsetY-e.offsetX} ,${e.offsetY+50})`;
//     heading.style.color = `rgba(${e.offsetY} , ${e.offsetY} , ${e.offsetX})`
// }




let value = 0
let counterr = document.querySelector('#counter')

const btn = document.querySelectorAll('.btn')

console.log(btn);

btn.forEach(function (item){

    item.addEventListener('click', function(e){
 
        const style = e.currentTarget.classList

        if(style.contains("decrease")){
            value--;
        }

        else if(style.contains("increase")){
            value++;
        }

        else {
            value = 0;
        };

if (value > 0) {
    counterr.style.color = "green"
}

if (value < 0) {
    counterr.style.color = "red"

}

if (value == 0) {
    counterr.style.color = "black"

}

      counterr.textContent = value

    })
})