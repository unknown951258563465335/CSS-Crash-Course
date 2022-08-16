class library {
    constructor(bL) {
        this.booksList = bL
    }


    getAllAvaliableBooks() {
        let i_book = localStorage.getItem('issue_book')

        if (i_book == null) {
            i_book = [];
        }
        else {
            i_book = JSON.parse(i_book)
        }
        this.booksList.forEach(function (books) {
            if (i_book.includes(books)) {
                return;
            }
            else {
                console.log(books)
            }
        });
    }


    issueBook(bName, pName) {

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
        if (i_book.includes(bName)) {
            console.log('your book is not avaliable')
        }
        else {
            i_person.push(pName)
            i_book.push(bName)
            localStorage.setItem('issue_person', JSON.stringify(i_person))
            localStorage.setItem('issue_book', JSON.stringify(i_book))

            console.log(`book has been issued to '${pName}'`)
        }
    }

    returnBook(bName) {
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
        if (i_book != 0) {
            for (let index = 0; index < i_book.length; index++) {
                if (bName == i_book[index]) {

                    i_book.splice(index, 1);
                    i_person.splice(index, 1);

                    localStorage.setItem('issue_person', JSON.stringify(i_person))
                    localStorage.setItem('issue_book', JSON.stringify(i_book))
                    console.log('book returned')
                }
                else {

                    console.log('This is not our book')
                }
            }
        }
        else {
            console.log('This is not our book')
        }
    }

};




let arr = ['programming is easy', 'javascript basics', 'python basics']
let book = new library(arr)


book.getAllAvaliableBooks()
book.returnBook('programming is easy')

book.issueBook('programming is easy', 'sarosh')