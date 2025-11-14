let bookLibrary = [];

const addBookBtn = document.getElementById('add-book-btn');
addBookBtn.addEventListener('click', function(){
    const bookForm = document.querySelector('.book-form');
    bookForm.style.display = 'block';
});

const addBook = document.getElementById('submit-button');
addBook.addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary();
    console.log(bookLibrary);
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
    const read = document.getElementById('read').value;

    const newBook = new Book(title, author, pages, read);
        bookLibrary.push(newBook);

};





