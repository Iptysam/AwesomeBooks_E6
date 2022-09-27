import ClassLocalStorage from './addnew.js';

class createBookElement {
  static displayBooks() {
    const books = ClassLocalStorage.getBooks();

    books.forEach((book) => createBookElement.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#myBooks');

    const bookDisplay = document.createElement('div');
    bookDisplay.className = 'bookList1';
    bookDisplay.innerHTML = `
        <p class="bookTitle"><b>${book.title}</b></p>
        <p>by<span></span><b>${book.author}.</b></p>
        <button class="delete">Remove</button>
        `;

    list.appendChild(bookDisplay);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

export default createBookElement;