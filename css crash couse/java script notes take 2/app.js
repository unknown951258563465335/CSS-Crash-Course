
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addNotes);
showNotes()
function addNotes() {
    let textArea = document.querySelector('#textArea');
    let notes = localStorage.getItem('notes');
    if (textArea.value.lenght != 0) {
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
function showNotes(){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes)
    }
    let html = ''

    notesArray.forEach(function(element , index) {
        html += `
                        <div class="cards-border">
        <h3>Note ${index+1}</h3>
        <p>${element}</p>
        <button onclick="deleteNote(${index})" id="${index}">Delete Notes</button>
    </div>`
    });
    if(notesArray.length != 0){
        document.querySelector('#cards').innerHTML = html
    }
    else{
        document.querySelector('#cards').innerHTML = `<h1>There is Nothing to show here!</h1>`
    }
}
function deleteNote(index) {
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesArray = [];
    }
    else{
        notesArray = JSON.parse(notes)
    }
    notesArray.splice(index,1)
    localStorage.setItem('notes', JSON.stringify(notesArray));
    showNotes()
}