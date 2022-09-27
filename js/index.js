import { DateTime } from '../modules/luxon.js';
import BookObject from '../modules/main.js';
import ClassLocalStorage from '../modules/addnew.js';
import createBookElement from '../modules/ui.js';

// Define the current local time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current_date').innerHTML = currentDate;

// Event: Display Books
document.addEventListener('DOMContentLoaded', createBookElement.displayBooks);

// Event: Add a Book
document.querySelector('#book_form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new BookObject(title, author);

  // Add Book to UI
  createBookElement.addBookToList(book);

  // Add book to store
  ClassLocalStorage.addBook(book);

  // Clear fields
  createBookElement.clearFields();
});
// Event: Remove a Book
document.querySelector('#book_list').addEventListener('click', (e) => {
  // Remove book from UI
  createBookElement.deleteBook(e.target);

  // Remove book from store
  ClassLocalStorage.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});

// display the books list when click the button "List"
const bookList = document.querySelector('.book-container');
const listBtn = document.querySelector('.listlink');
const formContainer = document.querySelector('.form_container');

// display the  Contact section when click the button "Contact"
const contactLink = document.querySelector('.contactlink');
const contactInfo = document.querySelector('.contact_info');

listBtn.addEventListener('click', () => {
  console.log('bookList');
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

window.addEventListener('load', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

// display the Add book form  when click the button "Add new"
const addNewBtn = document.querySelector('.add-link');

addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'block';
});