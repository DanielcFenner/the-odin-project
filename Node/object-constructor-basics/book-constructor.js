function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  };
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
const book2 = new Book("1984", "George Orwell", 328, false);

console.log(book1.info());
console.log(book2.info());
