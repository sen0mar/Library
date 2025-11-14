let bookLibrary = [];

const addBookBtn = document.getElementById('add-book-btn');
addBookBtn.addEventListener('click', function(e){
    e.preventDefault();
    const bookForm = document.querySelector('.book-form');
    bookForm.style.display = 'block';
});