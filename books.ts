//Test books for now
let book1 = {
        "title" : "myTitle",
        "author" : "An Author",
        "Description" : "lorem ipsum",
        "date-Released" : 2023,
        "price" : 19.99,
        "img_src" : "https://i5.walmartimages.com/asr/c7247ec9-4856-49af-a992-d4de4455b905.8efbdeb454e2540b52c957b9b94cfff2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        "tags" : [
            "fiction",
            "romance",
            "comedy"
            ]
    }
let book2 = {
        "title" : "myTitle2",
        "author" : "An Author2",
        "Description" : "lorem ipsum2",
        "date-Released" : 2023,
        "price" : 14.99,
        "img_src" : "https://i5.walmartimages.com/asr/c7247ec9-4856-49af-a992-d4de4455b905.8efbdeb454e2540b52c957b9b94cfff2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        "tags" : [
            "fiction",
            "romance",
            "comedy"
            ]
    }

//Value to hold the value of the cart
var cartPrice:number = 0;


//Array to hold the books
const books : any = [book1, book2];

//Lambda to load the books when the document is loaded
document.addEventListener("DOMContentLoaded", function loadBooks () {
    const bookTable = document.getElementById("myTable");
    for(let i in books) {
        //Put this new book into the table
        bookTable!.appendChild(createNewBook(
            books[i].title, books[i].author, books[i].img_src, 
            books[i].description, books[i].price)
        );     }
    
});
//Quick function to total the price of the cart
function addToCart(price :number) {
    cartPrice += price;
    console.log(cartPrice);
}

//Let's create a function to create books
function createNewBook(title :string, author :string, img_src :string, 
                       description :string, bookPrice :number){

    const newBook = document.createElement('tr');
    newBook.innerHTML += `<td><img src=${img_src}></td>`;
        //Add the title, author and description to the new book 
    newBook.innerHTML += 
        //Hard Coded HTML because somebody let me on the keyboard today
        `<td>
            <p>Title: ${title}</p>
            <p>Author: ${author}</p>
            <p>Description: ${description}</p>
        <span id="price_value">\$${bookPrice}</span>
        <input type="button" value="Add To Cart" id="add_button" onclick="addToCart(${bookPrice})">
        </td>`
    return newBook; //return the object
}



export{};

