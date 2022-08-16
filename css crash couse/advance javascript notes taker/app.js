function addNotes() {
    let textArea = document.querySelector('#textArea');
    let notesTitle = document.querySelector('#notesTitle');
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('notesTitle');



    if (textArea.value.length && notesTitle.value.length != 0) {
        if (notes == null && title == null) {
            notesArray = [];
            titleArray = [];
        }
        else {
            notesArray = JSON.parse(notes);
            titleArray = JSON.parse(title);
        }
        notesArray.push(textArea.value);
        titleArray.push(notesTitle.value);
        localStorage.setItem('notes', JSON.stringify(notesArray));
        localStorage.setItem('notesTitle', JSON.stringify(titleArray));
        textArea.value = '';
        notesTitle.value = '';
        showNotes()
    }
}
let showNotes = function() {
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('notesTitle');
    let cards = document.querySelector('.cards')
    if (notes == null || title == null) {
        notesArray = [];
        titleArray = [];
    }
    else {
        notesArray = JSON.parse(notes);
        titleArray = JSON.parse(title);
    }
    let html = ''
    for (let index = 0; index < notesArray.length && titleArray; index++) {
        html += `                <div class="cards-border">
        <h3>${titleArray[index]}</h3>
        <p>${notesArray[index]}</p>
        <button id = "${index}" onclick="delBtn(${index})">Delete Notes</button>
        <button onclick="editBtn(${index})">Edit Notes</button>
        </div>`
    }
    if (notesArray.length && titleArray.length != 0) {
        cards.innerHTML = html
    }
    else {
        cards.innerHTML = `<h1>There is Nothing to show Here!</h1>`
    }
}
function editBtn(index) {
    let notes = localStorage.getItem('notes');
    notesArray = JSON.parse(notes);
    notesArray = notesArray[index]
    let html = `<div class="cards-border">
    <textarea name="edit" id="edit">${notesArray}</textarea>
    <button onclick="saveBtn(${index})">Save Notes</button>
    </div>`
    cards.innerHTML = html
}


function saveBtn(index) {
    text = document.getElementById('edit')
    let notes = localStorage.getItem('notes');
    notesArray = JSON.parse(notes);
    notesArray[index] = text.value
    localStorage.setItem('notes', JSON.stringify(notesArray));
    showNotes()

}


function delBtn(index) {
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('notesTitle');
    if (notes == null || title == null) {
        notesArray = [];
        titleArray = [];
    }
    else {
        notesArray = JSON.parse(notes);
        titleArray = JSON.parse(title);
    }
    notesArray.splice(index, 1)
    titleArray.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesArray));
    localStorage.setItem('notesTitle', JSON.stringify(titleArray));
    showNotes()
}
function searchNotes() {
    cards = document.getElementsByClassName('cards-border')
    Array.from(cards).forEach(function (element) {
        content = element.getElementsByTagName('h3')[0].innerText
        if (content.includes(search.value.toLowerCase())) {
            element.style.display = 'block'
        }
        else {
            element.style.display = 'none'
        }
    })
}

let search = document.querySelector('#search');
addBtn.addEventListener('click', addNotes)
search.addEventListener('input', searchNotes)
showNotes()

