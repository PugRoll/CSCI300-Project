//Test books for now
let book1 = {
        "title" : "myTitle",
        "author" : "An Author",
        "Description" : "lorem ipsum",
        "date-Released" : 2023,
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
        "img_src" : "https://i5.walmartimages.com/asr/c7247ec9-4856-49af-a992-d4de4455b905.8efbdeb454e2540b52c957b9b94cfff2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        "tags" : [
            "fiction",
            "romance",
            "comedy"
            ]
    }
const books = [book1, book2];

function doSomeStuff() {
    const bookTable = document.getElementById("myTable");
    //Loop in the book array to each book sequentially
    for(i in books) {
        let newBook = document.createElement('tr');
        let img_src = books[i].img_src;
        //Add the cover of the book and have it on the left
        newBook.innerHTML += `<td><img src=${books[i].img_src}></td>`;
        //Add the title, author and description to the list 
        newBook.innerHTML += 
            `<td>
                <p>Title: ${books[i].title}</p>
                <p>Author: ${books[i].author}</p>
                <p>Description: ${books[i].Description}</p>
            </td>`
        bookTable.appendChild(newBook); //Put this new book into the table
    }

}

let num = 0;
function click5() {
    if(num == 5) {
        window.open("./playground.html")
    }
    else {
        num += 1;
    }
}
