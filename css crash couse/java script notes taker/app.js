console.log('i am here')
let addNote = document.querySelector('#addNote')
addNote.addEventListener('click' , funAddNote)

showNotes()
function funAddNote(e) {
    let textArea = document.querySelector('#textArea');
    let notes = localStorage.getItem('notes')
    if (textArea.value.length != 0) {
        if (notes == null){
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes)
        }
        notesObj.push(textArea.value);
        localStorage.setItem('notes' , JSON.stringify(notesObj));
        textArea.value =''
    }
    showNotes()
}
function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }

    let html = ""
    
    notesObj.forEach(function(element , index) {
        html += `
        <div class="cBorder">
        <h3>Notes ${index +1}</h3>
        <p>${element}</p>
        <div class="btn">
        <button id="${index}" onclick="deleteBtn(${index})">Delete</button>
        </div>
        </div>
        `
    });

    if (notesObj.length != 0) {
        document.getElementById('cards').innerHTML = html
    }
    else{
        document.getElementById('cards').innerHTML = '<h1>Nothing to show here!</h1>'
        
    }
}

function deleteBtn(index) {
    let notes = localStorage.getItem('notes')
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index , 1);
    localStorage.setItem('notes' , JSON.stringify(notesObj));
    showNotes()

}
