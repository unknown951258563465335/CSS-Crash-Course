let closeMenu = document.getElementById('close')
let navigation = document.getElementById('navigation')
let Menu = document.getElementById('open')
let hero = document.getElementById('hero')
closeMenu.addEventListener('click', closeNav)
Menu.addEventListener('click', openNav)

function closeNav() {
    navigation.style.transform = 'translateX(-15rem)'
    navigation.style.transition = '1s'
    Menu.style.display = 'block'
    Menu.style.transform = 'translateX(13rem)'
    Menu.style.transition = '2s'
    Menu.style.color = "black"

}
function openNav() {
    navigation.style.transform = 'translateX(0rem)'
    navigation.style.transition = '1s'
    Menu.style.display = 'none'
}


document.addEventListener('DOMContentLoaded', function () {
    // array with texts to type in typewriter
    var dataText = ["Web Developer.", "Designer.", "Programmer."];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector("#h1").innerHTML = text.substring(0, i + 1) + '<span id="typing_span" aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        else if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);

});
