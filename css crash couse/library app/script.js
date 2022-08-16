function getAllBooks() {
    let i_person = localStorage.getItem('issue_person')
    let i_book = localStorage.getItem('issue_book')

    if (i_person == null && i_book == null) {
        i_person = [];
        i_book = [];
    }
    else {
        i_person = JSON.parse(i_person)
        i_book = JSON.parse(i_book)
    }

    let tR = document.getElementById('tH_&_tD')
    let html = ""
    for (let index = 0; index < Books.length; index++) {
        html += `              
        <tr>
        <td>${index + 1}</td>
        <td>${author[index]}</td>
        <td>${Books[index]}</td>
        <td>Avaliable</td>
        <td id="${index}"><button class = "btn" onclick="issueB(${index})">Issue</button></td>
        <td>None</td>
        </tr>`

    }
    let tH = `
    <tr>
    <th>#</th>
    <th>Author Name</th>
    <th>Book Name</th>
    <th>Status</th>
    <th>Options</th>
    <th>Details</th>
  </tr>`
    tR.innerHTML = tH + html;

    for (let index = 0; index < Books.length; index++) {
        if (i_book.includes(Books[index])) {
            let issue_btn = document.getElementById(`${index}`)
            issue_btn.innerHTML = `<button class = "btn"  onclick="Return(${index})">Return</button>`
            issue_btn.previousElementSibling.innerHTML = 'Not Avaliable'
            issue_btn.nextElementSibling.innerHTML = `<button class="btn" onclick="Readfunc(${index})">Read More</button>`
        }

    }

}

let Readfunc = function (indexofBL) {
    let i_person = localStorage.getItem('issue_person')
    let i_book = localStorage.getItem('issue_book')


    if (i_person == null && i_book == null) {
        i_person = [];
        i_book = [];
    }
    else {
        i_person = JSON.parse(i_person)
        i_book = JSON.parse(i_book)
    }

    i_book.forEach(function (book, index) {
        if (book == Books[indexofBL]) {
            document.getElementById('table').innerHTML = `<h1>Book Name = ${book}</h1><br><h1>Author name = ${author[indexofBL]}</h1><br><h1>Studient name = ${i_person[index]}</h1>`
        }
    })
}

let Return = function name(indexofBL) {
    let i_person = localStorage.getItem('issue_person')
    let i_book = localStorage.getItem('issue_book')


    if (i_person == null && i_book == null) {
        i_person = [];
        i_book = [];
    }
    else {
        i_person = JSON.parse(i_person)
        i_book = JSON.parse(i_book)
    }

    i_book.forEach(function (book, index) {
        if (book == Books[indexofBL]) {
            i_book.splice(index, 1);
            i_person.splice(index, 1);

            localStorage.setItem('issue_person', JSON.stringify(i_person))
            localStorage.setItem('issue_book', JSON.stringify(i_book))
            getAllBooks()
        }
    })
}

let issueB = function (index) {
    document.getElementById('IssueBook').innerHTML = `<textarea  id="textArea" placeholder="Studient Name"></textarea><br><button onclick="issueIt(${index})">Submit</button>`

}
let issueIt = function (index) {
    let i_person = localStorage.getItem('issue_person')
    let i_book = localStorage.getItem('issue_book')

    if (i_person == null && i_book == null) {
        i_person = [];
        i_book = [];
    }
    else {
        i_person = JSON.parse(i_person)
        i_book = JSON.parse(i_book)
    }

    let textArea = document.getElementById('textArea')
    i_person.push(textArea.value)
    i_book.push(Books[index])
    localStorage.setItem('issue_person', JSON.stringify(i_person))
    localStorage.setItem('issue_book', JSON.stringify(i_book))
    getAllBooks()
    document.getElementById('IssueBook').innerHTML = ""
}



let Books = ['programming is easy', 'javascript basics', 'python basics' , 'Html Basics' , 'Css Basics' , 'C-programming']
let author = ['Sarosh', 'Rayyan', 'Inaya' , 'waleed' , 'ibad' ,'Izza']
getAllBooks()
// book.getAllAvaliableBooks()

// book.issueBook('javascript basics', 'Rayyan')


// let issue_id = document.getElementById('')