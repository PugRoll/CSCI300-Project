import {createNewBook } from './books.js';

"use strict";
var cartPrice = 0;
document.addEventListener("DOMContentLoaded", function loadPrice() {
    var price = localStorage.getItem("cartPrice")
    var p = document.getElementById("CartPrice").textContent = "$".concat(price);
    console.log("Price of cart on page load: " + price);
    //Crate an array with the ids
    var ids = localStorage.getItem("ids").split(",")
    
    createBookWithId(ids);
});



function createBookWithId(ids) {
    console.log(ids);
    //JS is weird, just an anonymous function 
    (async () => {
        const url = "http://127.0.0.1:8080/books.json"
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            var bookTable = document.getElementById("cart-table");
            var i = 0;
            //Loop through collection of books and display only the books that were added to the cart
            for(const book of data.items) {  
                for(var i = 0; i < ids.length; i++) {
                   if(JSON.stringify(book.id).includes(ids[i].toString())) {
                       console.log(book.title + " added");
                       bookTable.appendChild(createNewBook(book.title, book.author, book.img_src,
                                        book.Description, book.price, book.id, true));
                   } 
                }
            }
            
            
        })
        .catch(console.error); 
    })();
};






