let bookLibrary = [];

const addBookBtn = document.getElementById('add-book-btn');  // Displays form for filling book's info
addBookBtn.addEventListener('click', function(){
    const bookForm = document.querySelector('.book-form');
    bookForm.style.display = 'block';
});

const addBook = document.getElementById('submit-button');  // Adds new book to library
addBook.addEventListener('click', function(e) {
    e.preventDefault();
    const newBook = addBookToLibrary();
    addBookToCard(newBook);
});



function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook);
    return newBook;

};

function addBookToCard(book) {
    const card = document.getElementById('card');

    
    const div = document.createElement('div');
    div.innerHTML = `
        <p><strong>Title:<strong> ${book.title}</p>
        <p><strong>Author:<strong> ${book.author}</p>
        <p><strong>Pages:<strong> ${book.pages}</p>
        <p><strong>Read:<strong> ${book.read ? "Yes" : "No"}</p>
        <p>-------------</P>
    `;
    div.classList.add('card-container');
    card.appendChild(div);
};





