class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
            return element;
        });
    }

    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
        }
        else {
            console.log("This book is already issued!");
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }
}


let LibraryObj = new Library(["B.S.Grewal", "Erwin Kreysig", "Mechanical Engineering", "Boylested", "EVS", "N.D. Bhatt", "A.P. French", "Chemistry", "Electrical Engineering"])
//console.log(LibraryObj.getBookList()) undefined
//let booklist=document.getElementById("booklist-el")
//booklist.textContent+= LibraryObj.getBookList()
//console.log(LibraryObj.issueBook("B.S.Grewal","Hrishita Paul"))

let Submit = document.getElementById("submit-el")
Submit.addEventListener("click", function (e) {
    let FirstBook = document.getElementById("FirstBook-el")
    let SecondBook = document.getElementById("SecondBook-el")
    let ThirdBook = document.getElementById("ThirdBook-el")
    let FourthBook = document.getElementById("FourthBook-el")
    let output = document.getElementById("output-el")

    let array = []


    if (FirstBook.checked) {
        array.push(FirstBook.value)
    }
    if (SecondBook.checked) {
        array.push(SecondBook.value)
    }
    if (ThirdBook.checked) {
        array.push(ThirdBook.value)
    }
    if (FourthBook.checked) {
        array.push(FourthBook.value)
    }
    //console.log("Submit button has been clicked")
    console.log(array.length)
    if (array.length === 1) {
        output.textContent = "Can issue 1 book"
    }
    else if (array.length === 2) {
        output.textContent = "Can issue 2 books"
    }
    else if (array.length === 3) {
        output.textContent = "Can issue 3 books"
    }
    else if (array.length === 4) {
        output.textContent = "Can issue 4 books"
    }
})

