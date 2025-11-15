let bookLibrary = [];

const addBookBtn = document.getElementById('add-book-btn');  // Displays form for filling book's info
addBookBtn.addEventListener('click', function(){
    const bookForm = document.querySelector('.book-form');
    bookForm.style.display = 'block';
});


const bookForm = document.querySelector('.book-form');
const addBook = document.getElementById('submit-button');  // Adds new book to library
addBook.addEventListener('click', function(e) {
    e.preventDefault();
    const newBook = addBookToLibrary();
    bookForm.reset();
    bookForm.style.display = 'none';
    addBookToCard(newBook);
});



function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

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
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> <span class="read-status">${book.read ? "Yes" : "No"}</p>

        <div class='buttons'>
            <label>
                <input type='checkbox' ${book.read ? 'checked' : ''}> Read
            </label>
            <button>Remove</button>
        </div>
    `;
    div.classList.add('card-container');
    div.setAttribute('data-book-id', book.id);
    card.appendChild(div);


    const checkbox = div.querySelector('input[type="checkbox"]');
    const readStatus = div.querySelector('.read-status');
    
    checkbox.addEventListener('change', function() {
        book.toggleRead(); // Use the prototype method
        readStatus.textContent = book.read ? "Yes" : "No";
    });

    const removeBtn = div.querySelector('button');
    removeBtn.addEventListener('click', function() {
        bookLibrary = bookLibrary.filter(b => b.id !== book.id);
        div.remove();
    });
};







