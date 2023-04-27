import {createNewBook } from './books.js';

"use strict";
var cartPrice = 0;
document.addEventListener("DOMContentLoaded", function loadPrice() {
    //Check to make sure cart price is not null and handle it if it is.
    if(localStorage.getItem("cartPrice") === null ) {
       var price = 0.00; 
    }
    else {
        var price = localStorage.getItem("cartPrice")
    }
    var p = document.getElementById("CartPrice").textContent = "$".concat(price);
    console.log("Price of cart on page load: " + price);
    //Crate an array with the ids
    var ids = localStorage.getItem("ids").split(",");

    createBookWithId(ids);
    cartPrice = parseFloat(price);
    

    console.log(price);
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
            const quantity = {};
            console.log(quantity);
            const arr = [...new Set(ids)]; //Create an array that removes all duplicates

            //Get amount of occurences and store in an array
            const arr2 = ids.map(Number);
            for(var num of arr2) {
                quantity[num] = quantity[num] ? quantity[num] + 1 : 1;
            }
            console.log(arr.sort());
            //Loop through collection of books and display only the books that were added to the cart
            for(const book of data.items) {  
                for(var i = 0; i < arr.length; i++) {
                   if(JSON.stringify(book.id).includes(arr[i].toString())) { 
                       console.log(book.title + " added");
                       bookTable.appendChild(createNewBook(book.title, book.author, book.img_src,
                                        book.Description, book.price, book.id, true, quantity[i + 1]));
                       i += quantity[i];
                   } 
                    
                }
            }
            console.log(quantity[1], quantity[2], quantity[3], quantity[4]);
        })
        .catch(console.error); 
    })();
};

