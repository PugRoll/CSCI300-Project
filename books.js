"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//Test books for now
var book1 = {
    "title": "myTitle",
    "author": "An Author",
    "Description": "lorem ipsum",
    "date-Released": 2023,
    "price": 19.99,
    "img_src": "https://i5.walmartimages.com/asr/c7247ec9-4856-49af-a992-d4de4455b905.8efbdeb454e2540b52c957b9b94cfff2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    "tags": [
        "fiction",
        "romance",
        "comedy"
    ]
};
var book2 = {
    "title": "myTitle2",
    "author": "An Author2",
    "Description": "lorem ipsum2",
    "date-Released": 2023,
    "price": 14.99,
    "img_src": "https://i5.walmartimages.com/asr/c7247ec9-4856-49af-a992-d4de4455b905.8efbdeb454e2540b52c957b9b94cfff2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    "tags": [
        "fiction",
        "romance",
        "comedy"
    ]
};
//Value to hold the value of the cart
var cartPrice = 0;
//Array to hold the books
var books = [book1, book2];
//Lambda to load the books when the document is loaded
document.addEventListener("DOMContentLoaded", function loadBooks() {
    var bookTable = document.getElementById("myTable");
    for (var i in books) {
        //Put this new book into the table
        bookTable.appendChild(createNewBook(books[i].title, books[i].author, books[i].img_src, books[i].description, books[i].price));
    }
});
//Quick function to total the price of the cart
function addToCart(price) {
    cartPrice += price;
    window.alert(cartPrice);
}
//Let's create a function to create books
function createNewBook(title, author, img_src, description, bookPrice) {
    var newBook = document.createElement('tr');
    newBook.innerHTML += "<td><img src=".concat(img_src, "></td>");
    //Add the title, author and description to the new book 
    newBook.innerHTML +=
        //Hard Coded HTML because somebody let me on the keyboard today
    //  //TODO: Make this not ugly please
        "<td>\n     <p>Title: ".concat(title, "</p>\n <p>Author: ").concat(author, "</p>\n <p>Description: ").concat(description, "</p>\n <span id=\"price_value\">$").concat(bookPrice, "</span>\n <input type=\"button\" value=\"Add To Cart\" id=\"add_button\" onclick=\"addToCart(").concat(bookPrice, ")\">\n </td>");
    return newBook; //return the object
}
