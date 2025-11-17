class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.cardContainer = document.getElementById('card');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const addBookBtn = document.getElementById('add-book-btn');
        addBookBtn.addEventListener('click', () => this.showBookForm());

        const submitButton = document.getElementById('submit-button');
        submitButton.addEventListener('click', (e) => this.handleSubmit(e));
    }

    showBookForm() {
        const bookForm = document.querySelector('.book-form');
        bookForm.style.display = 'block';
    }

    handleSubmit(e) {
        e.preventDefault();
        const bookForm = document.querySelector('.book-form');
        const newBook = this.addBook();
        bookForm.reset();
        bookForm.style.display = 'none';
        this.renderBookCard(newBook);
    }

    addBook() {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').checked;

        const newBook = new Book(title, author, pages, read);
        this.books.push(newBook);
        return newBook;
    }

    removeBook(bookId) {
        this.books = this.books.filter(book => book.id !== bookId);
    }

    renderBookCard(book) {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> <span class="read-status">${book.read ? "Yes" : "No"}</span></p>

            <div class='buttons'>
                <label>
                    <input type='checkbox' ${book.read ? 'checked' : ''}> Read
                </label>
                <button>Remove</button>
            </div>
        `;
        div.classList.add('card-container');
        div.setAttribute('data-book-id', book.id);
        this.cardContainer.appendChild(div);

        this.attachCardEventListeners(div, book);
    }

    attachCardEventListeners(cardElement, book) {
        const checkbox = cardElement.querySelector('input[type="checkbox"]');
        const readStatus = cardElement.querySelector('.read-status');
        
        checkbox.addEventListener('change', () => {
            book.toggleRead();
            readStatus.textContent = book.read ? "Yes" : "No";
        });

        const removeBtn = cardElement.querySelector('button');
        removeBtn.addEventListener('click', () => {
            this.removeBook(book.id);
            cardElement.remove();
        });
    }
}


const library = new Library();

