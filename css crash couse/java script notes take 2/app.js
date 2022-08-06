// functions start
function addNotes() {
    let textArea = document.querySelector('#textArea');
    let notes = localStorage.getItem('notes');
    if (textArea.value.length != 0) {
        if (notes == null) {
            notesArray = [];
        }
        else {
            notesArray = JSON.parse(notes);
        }
        notesArray.push(textArea.value);
        localStorage.setItem('notes', JSON.stringify(notesArray));
        textArea.value = '';
        showNotes()
    }
}
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes)
    }
    let html = ''
    notesArray.forEach(function (element, index) {
        html += `
                        <div class="cards-border">
        <h3>Note ${index + 1}</h3>
        <p>${element}</p>
        <button onclick="deleteNote(${index})" id="${index}">Delete Notes</button>
    </div>`
    });
    if (notesArray.length != 0) {
        document.querySelector('#cards').innerHTML = html
    }
    else {
        document.querySelector('#cards').innerHTML = `<h1>There is Nothing to show here!</h1>`
    }
}
function deleteNote(index) {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes)
    }
    notesArray.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesArray));
    showNotes()
}

function searchNotes() {
    let cards = document.getElementsByClassName('cards-border')
    Array.from(cards).forEach(function (element) {
        let content = element.getElementsByTagName('p')[0].innerText;
        if (content.includes(search.value.toLowerCase())) {
            element.style.display = 'block'
        }
        else {

            element.style.display = 'none'
        }
    });
}

// functions end


let addBtn = document.querySelector('#addBtn');
let search = document.getElementById('search')
addBtn.addEventListener('click', addNotes);
search.addEventListener('input', searchNotes)
showNotes()

