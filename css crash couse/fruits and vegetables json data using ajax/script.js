let button = document.getElementById('button')
button.addEventListener('click' , func)


function func() {
    let xmh = new XMLHttpRequest;

    xmh.open('GET' , 'https://api.predic8.de:443/shop/categories/Fruits' , true);

    xmh.onload = function(){
        let fruits = JSON.parse(this.responseText)
        fruits = fruits.products
        let str= ""
        for (const key in fruits) {
            str += `<li>${fruits[key].name}</li>`
            
        }
        document.getElementById('list').innerHTML = str
    }

    xmh.send()
}