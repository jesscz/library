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
    const newBook = new Book(title, author, pages, progress);
    myLibrary.push(newBook);
    
    
    
    for (i = 0; i < myLibrary.length; i++){
        let counter = 0;
        if (i == counter){
            const bookContainer = document.createElement("div");
            bookContainer.setAttribute("class", "books");
            const bookTitle = document.createElement("p");
            const bookAuthor = document.createElement("p");
            const bookPages = document.createElement("p");
            const bookStatus = document.createElement("p");
            bookTitle.append(myLibrary[i][`title`]);
            bookAuthor.append(myLibrary[i][`author`]);
            bookPages.append(myLibrary[i][`pages`]);
            bookStatus.append(myLibrary[i][`progress`]);
            bookContainer.appendChild(bookTitle);
            bookContainer.appendChild(bookAuthor);
            bookContainer.appendChild(bookPages);
            bookContainer.appendChild(bookStatus);
            bookDisplay.appendChild(bookContainer);
            console.log(bookContainer);
        }
        counter++;
    }

    
    
}


submitBook.addEventListener("click", () => {
    addBookToLibrary();
});


