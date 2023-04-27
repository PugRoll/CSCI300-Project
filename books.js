//Create a variable for the url to query local server for json data
const localURL = "http://127.0.0.1:8080/books.json";

//query the local server, write up soon, pinky promise
async function queryLocalServer(url) {
    //Query the server using the data
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        var bookTable = document.getElementById("myTable");
        for (const book of data.items) {
           bookTable.appendChild(createNewBook(book.title, book.author, 
               book.img_src, book.Description, 
               book.price, book.id, false, 1)); 
        }
    })
    .catch(console.error);
    const response2 = await fetch(url);
    const jsonData = await response2.json();
    console.log(jsonData);
}


//Value to hold the value of the cart
var cartPrice = 0;
var bookIDs= [];
//Array to hold the books
//Lambda to load the books when the document is loaded
document.addEventListener("DOMContentLoaded", function loadBooks() {
    var bookTable = document.getElementById("myTable");
    queryLocalServer(localURL); 
});
//Quick function to total the price of the cart
function addToCart(price) {
    cartPrice += price;
    console.log(cartPrice);
}
//Let's create a function to create books
export function createNewBook(title, author, img_src, 
    description, bookPrice, book_id, b_remove, quantity) {
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
    addToCartButton === null || addToCartButton === void 0 ? void 0 : 
        addToCartButton.addEventListener('click', function handleClick(event) {
            cartPrice += Math.round(bookPrice * 100) / 100; //Ensure only 2 decimal places
            var DOMcartPrice = document.getElementById("currPrice");
            DOMcartPrice.innerText = cartPrice.toFixed(2).toString();
            bookIDs.push(book_id);

            //Push id and cart price to localStorage
            localStorage.setItem("cartPrice", cartPrice.toFixed(2).toString());
            localStorage.setItem("ids", bookIDs.toString());
        });


    addToCartButton.setAttribute("value", "Add to Cart");
    priceDiv.appendChild(price_value);
    priceDiv.appendChild(addToCartButton);
    //Append the divs
    td.appendChild(infoDiv);
    td.appendChild(priceDiv); 
    //Evaluate if an remove button should be added
    if(b_remove) {    
        var removeButton = document.createElement("input");
        removeButton.id = "remove_button";
        removeButton.setAttribute("type", "button");
        removeButton.value = "remove";
        removeButton.addEventListener("click", function handleClick(event) {
            cartPrice -= Math.round(bookPrice * 100) / 100;
        });
        td.appendChild(removeButton);

        //Add the quantity to the object
        const quantityElement = document.createElement("span");
        quantityElement.id = "quantity";
        quantityElement.innerHTML = `Quantity: ${quantity}`;
        td.appendChild(quantityElement)

    }
    newBook.appendChild(td);
    return newBook; //return the object
}
