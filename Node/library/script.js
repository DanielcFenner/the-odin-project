const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// test books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book3 = new Book("1984", "George Orwell", 328, true);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 279, false);
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger", 214, true);
const book6 = new Book("The Hobbit", "J.R.R. Tolkien", 310, false);
const book7 = new Book("Fahrenheit 451", "Ray Bradbury", 194, true);
const book8 = new Book("Moby Dick", "Herman Melville", 585, false);
for (const book of [book1, book2, book3, book4, book5, book6, book7, book8]) {
  addBookToLibrary(book);
}

function getRandomColor() {
  // Generate a light hex color by ensuring RGB values are in the upper range (128-255)
  let color = "";
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 128 + 128)
      .toString(16)
      .padStart(2, "0");
  }
  return color;
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.dataset.index = myLibrary.indexOf(book);

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-book-button");
  removeButton.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
    `;

  removeButton.addEventListener("click", () => {
    const bookIndex = bookCard.dataset.index;
    myLibrary.splice(bookIndex, 1);
    displayLibrary();
  });
  bookCard.appendChild(removeButton);

  const bookCover = document.createElement("img");
  bookCover.classList.add("book-cover");
  bookCover.src = `https://placehold.co/220x320/${getRandomColor()}/31343C?text=${encodeURIComponent(
    book.title
  )}`;
  bookCard.appendChild(bookCover);

  const bookDetails = document.createElement("div");
  bookDetails.classList.add("book-card-details");

  const bookTitle = document.createElement("h5");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = book.title;
  bookDetails.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = `by ${book.author}`;
  bookDetails.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.classList.add("book-pages");
  bookPages.textContent = `${book.pages} pages`;
  bookDetails.appendChild(bookPages);

  const readStatusButton = document.createElement("button");
  readStatusButton.classList.add(`book-read-${book.read ? "true" : "false"}`);
  readStatusButton.textContent = book.read ? "Read" : "Not Read";
  bookDetails.appendChild(readStatusButton);

  readStatusButton.addEventListener("click", () => {
    let bookIndex = bookCard.dataset.index;
    let theBook = myLibrary[bookIndex];
    theBook.read = theBook.read ? false : true;
    displayLibrary();
  });

  bookCard.appendChild(bookDetails);
  return bookCard;
}

// re-render all the cards but also udpate the indexes of the cards for the remove button to work
function displayLibrary() {
  const booksGrid = document.getElementById("books-grid");
  booksGrid.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookCard = createBookCard(book);
    booksGrid.appendChild(bookCard);
  });
}

// Initial display
displayLibrary();

const addBookButton = document.getElementById("add-book-button");
const addBookModal = document.getElementById("add-book-modal");
const closeModalButton = document.getElementById("cancel-button");
const addBookForm = document.getElementById("add-book-form");

addBookButton.addEventListener("click", () => {
  addBookModal.showModal();
});

closeModalButton.addEventListener("click", () => {
  addBookModal.close();
});

// get form info and create a new book and refresh the book display
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read =
    document.querySelector('input[name="read-status"]:checked').value === "yes";
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayLibrary();
  addBookModal.close();
});
