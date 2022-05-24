const submitBook = document.getElementById("submit-button");
const bookDisplay = document.getElementById("book-display");


let myLibrary = [];


function Book(title, author, pages, progress){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.progress = progress;
}


function addBookToLibrary(){    
    title = document.getElementById("book").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    progress = document.getElementById("progress").value;
    if ((title != "") && (author != "") && (pages != "")){ //if values are not empty add book as new book
        const newBook = new Book(title, author, pages, progress);
        myLibrary.push(newBook);
        console.log(myLibrary.length);
    }
    let i = ((myLibrary.length) - 1); //same as mylibrary[index]
    if (i >= 0){ //if it is not -1 (which means empty)
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "books");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookStatus = document.createElement("p");
        const deleteBtn = document.createElement("button");
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
        console.log(bookContainer);
    }    
}
    


submitBook.addEventListener("click", () => {
    addBookToLibrary();
});


