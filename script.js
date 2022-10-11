const submitBook = document.getElementById("submit-button");
const bookDisplay = document.getElementById("book-display");

let myLibrary = [];

class Book{
    constructor(title, author, pages, progress){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.progress = progress;
    }
    addBookToLibrary(){   
        let title = document.getElementById("book").value; //can also be different variable name to above (6 lines up) if you change "title" in all of addBookToLibrary
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let progress = document.getElementById("progress").value;
        if ((title != "") && (author != "") && (pages != "")){ //if values are not empty add book as new book
            const book = new Book(title, author, pages, progress); 
            myLibrary.push(book);
            console.log(myLibrary);
        }
        let i = ((myLibrary.length) - 1); //same as mylibrary[index]
        if (i >= 0){ //if it is not -1 (which means empty)
            const bookContainer = document.createElement("div");
            bookContainer.setAttribute("class", "books");
            const bookTitle = document.createElement("p");
            const bookAuthor = document.createElement("p");
            const bookPages = document.createElement("p");
            const bookStatus = document.createElement("button");
            bookStatus.setAttribute("class", "progress");
            const deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "delete-button");
            deleteBtn.innerHTML = "delete";
            bookTitle.append(myLibrary[i][`title`]);
            bookAuthor.append(myLibrary[i][`author`]);
            bookPages.append(myLibrary[i][`pages`]);
            bookStatus.append(myLibrary[i][`progress`]);
            bookContainer.appendChild(bookTitle);
            bookContainer.appendChild(bookAuthor);
            bookContainer.appendChild(bookPages);
            bookContainer.appendChild(bookStatus);
            bookContainer.appendChild(deleteBtn);
            bookDisplay.appendChild(bookContainer);
            deleteBtn.addEventListener("click", function() {
                this.parentNode.remove(); //remove visually
                let x = myLibrary.indexOf(this.parentNode.firstChild);
                myLibrary.splice(x, 1); 
                console.log(myLibrary);
            });
            bookStatus.addEventListener("click", function() { //only changes read/not read visually and not on console 
                if((this.parentNode.lastChild.previousSibling.innerHTML) == "Not Read"){
                    this.parentNode.lastChild.previousSibling.innerHTML = "Read";
                }
                else if((this.parentNode.lastChild.previousSibling.innerHTML) == "Read"){
                    this.parentNode.lastChild.previousSibling.innerHTML = "Not Read"
                }
            });
        return (title, author, pages, progress)
        }
    }   
}

submitBook.addEventListener("click", function() {
    let book = new Book(this.title, this.author, this.pages, this.progress);
    book.addBookToLibrary();
});


