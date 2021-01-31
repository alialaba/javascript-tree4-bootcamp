/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */


const books = [{
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        alreadyRead: false,
        URL: "https://khajuribazar.s3.amazonaws.com/__sized__/products/28-thumbnail-540x540-70.JPG"
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        URL: "https://images1.penguinrandomhouse.com/cover/9780307476708 "

    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        alreadyRead: true,
        URL: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg"

    }
];
let bookList = document.getElementById("bookList");
books.forEach((book) => {
    //variables for creating elements
    let ulElement = document.createElement("ul");
    let liElement = document.createElement("li");
    let pElement = document.createElement("p");
    let imgElement = document.createElement("img");

    bookList.appendChild(ulElement);
    ulElement.appendChild(liElement);

    liElement.style.padding = "30px"
    liElement.appendChild(pElement);
    pElement.appendChild(document.createTextNode(book.title + ` by ${book.author}`))
    liElement.appendChild(imgElement);
    imgElement.src = book.URL;
    imgElement.style.width = "200px"

    // console.log(book.author);
    book.alreadyRead === true ? liElement.style.background = "green" : liElement.style.background = "red";
})