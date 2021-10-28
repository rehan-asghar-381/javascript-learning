// Importing Book from Book.js

import Book from "./book.js";

const everyBook     = new Book(
    "Information Technology",
    "Rehan Asghar",
    true,
    2021,
    400,
    30,
    "continue..."
);

console.log("This is Book object: ", everyBook);

console.log("The book title is: ", everyBook.title);

// Book title is going to be updated 

everyBook.title = "Computer Science";

console.log("The Book title is: ", everyBook.title);

console.log("The Book title is: ", everyBook.readStatus);
// Read status is going to be updated 
everyBook.updateReadStatus("Stop!");
console.log("Read Status has been chaged: ", everyBook.readStatus);