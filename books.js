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
    console.log(cartPrice);
}
//Let's create a function to create books
function createNewBook(title, author, img_src, description, bookPrice) {
    var newBook = document.createElement('tr');
    newBook.innerHTML += "<td><img src=".concat(img_src, "></td>");
    //Create a new element and div to house the information
    var td = document.createElement('td');
    var infoDiv = document.createElement('div');
    infoDiv.id = "info_div";
    infoDiv.innerHTML += "<p>Title: ".concat(title, "</p>");
    infoDiv.innerHTML += "<p>Author: ".concat(author, "</p>");
    infoDiv.innerHTML += "<p>Description: ".concat(description, "</p>");
    //Create a span for the bookprice and a button to add to cart
    var priceDiv = document.createElement('div');
    var price_value = document.createElement('span');
    price_value.id = "price_value";
    price_value.innerText = "$".concat(bookPrice);
    //Create an element to have the input button type
    var addToCartButton = document.createElement('input');
    addToCartButton.id = "add_button";
    addToCartButton.setAttribute("type", "button");
    addToCartButton === null || addToCartButton === void 0 ? void 0 : addToCartButton.addEventListener('click', function handleClick(event) {
        cartPrice += Math.round(bookPrice * 100) / 100; //Ensure only 2 decimal places
        var DOMcartPrice = document.getElementById("currPrice");
        DOMcartPrice.innerText = cartPrice.toString();
        console.log("Current price of cart is: ".concat(cartPrice));
    });
    addToCartButton.setAttribute("value", "Add to Cart");
    priceDiv.appendChild(price_value);
    priceDiv.appendChild(addToCartButton);
    //Append the divs
    td.appendChild(infoDiv);
    td.appendChild(priceDiv);
    newBook.appendChild(td);
    return newBook; //return the object
}
